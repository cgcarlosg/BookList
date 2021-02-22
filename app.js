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

