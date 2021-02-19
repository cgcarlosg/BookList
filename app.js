class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class UI {
    addBooksToList(book) {

        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
    
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="" class="delete">X</a></td>

        `;
    list.appendChild(row);
    }

deleteBook(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}
}

// Event Listening

document.getElementById('book-form').addEventListener('submit', function(e){
    //Get form values

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    //Intantiate book
    const book = new Book(title, author, pages);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || pages === '') {

        alert("Please fill the fields");

    } else {

        // Add book to list
        ui.addBooksToList(book);

        // Clear Fields
        ui.clearFields();
    }
        e.preventDefault();
});