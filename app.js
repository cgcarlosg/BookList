// Event listeners
document.querySelector("#add-book-btn").addEventListener('click', () => {
    document.querySelector("#add-book-modal").classList.toggle('active');
})

document.querySelector("#add-book-modal #close").addEventListener('click', () => {
    document.querySelector("#add-book-modal").classList.toggle("active");
})

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor() {
        this._library = (localStorage.library == undefined) ? [] : JSON.parse(localStorage.library);
    }

    addBookToLibrary(title, author, read) {
        this._library.push(new Book(title, author, read));
    }

    drawLibrary() {
        const table = document.querySelector("tbody");
        table.innerHTML = "";
        this._library.forEach(book => {
            let read = (book.read) ? '✓' : '✕';
            table.innerHTML += `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><a href="#" class="read-status" data-value="${this._library.indexOf(book)}">${read}</span></td>
            <td><button data-value="${this._library.indexOf(book)}">Delete</button></td>
            </tr>`
        });
    
        table.querySelectorAll("button").forEach(button => {
            button.addEventListener('click', () => {
                let index = this['data-value'];
                this._library.splice(index, 1);
                this.drawLibrary();
            })
        })
    
        table.querySelectorAll('.read-status').forEach(a => {
            a.addEventListener('click', (event) => {
                let index = event.target.getAttribute("data-value");
                this._library[index].read = (this._library[index].read) ? false : true;
                this.drawLibrary();
            })
        })
    
        localStorage.library = JSON.stringify(this._library);
    }
}

class userInterface {
    constructor(library) {
        this._library = library;
    }

    addBookForm() {
        const title = document.querySelector("#title").value;
        const author = document.querySelector('#author').value;
        const read = document.querySelector("#read").checked;
        this._library.addBookToLibrary(title, author, read);
        this._library.drawLibrary();
        const popup = document.querySelector(".modal");
        popup.classList.toggle("active");
        popup.querySelectorAll("input").forEach(input => {
            if (input.type == "checkbox") {
                input.checked = false;
            }
            else {
                input.value = '';
            }
        })
    }
}


const library = new Library();
const ui = new userInterface(library);

library.drawLibrary();