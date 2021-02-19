// Book Class:  Represents a Book
class Book {
    constructor(title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page;
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {

        const StoredBooks = [
            {
                title: "Book one",
                author: 'Jhon Doe',
                page: 120
            },
            {
                title: "Book Two",
                author: 'Jane Doe',
                page: 145
            }
        ];

        const books = StoredBooks;

        books.forEach ((book) => UI.addBookToList (book));
    }
      static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.page}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
      }
}


// Store class: HAndless Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book

// Event: Remove a Book