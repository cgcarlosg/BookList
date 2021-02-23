class Book {
    constructor(title, author, pages, isRead) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = isRead;
    }
  }
  
  class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create TR element
        const row = document.createElement('tr');
        // Insert columns
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.isRead}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
      
        list.appendChild(row);
        }
  
    showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert ${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form')
      container.insertBefore(div, form);
      setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
  }
  
    deleteBook(target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }
    }
  
    clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('pages').value = '';
      document.getElementById('read').value = '';
    }
  }
  
  // Event Listeners
  document.getElementById('book-form').addEventListener('submit', 
  function (e) {
  
    // Get form values
   const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         pages = document.getElementById('pages').value
         isRead = document.querySelector('#read').checked;
  
    // Instantiate Book
    const book = new Book(title, author, pages, isRead);
  
    // Instantiate UI
    const ui = new UI();
  
    // Validate
    if(title === '' || author === '' || pages === '') {
    // Error Alert
    ui.showAlert('Please fill in all fields', 'error')
    } else {
  
    // Add Book To List
    ui.addBookToList(book);
  
    // Add To Local Storage
    Store.addBook(book);
  
    // Show Success
    ui.showAlert('Book Added!', 'success');
  
    // Delete Book
    UI.prototype.deleteBook = function(target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }
    }
  
    // Clear Fields
    ui.clearFields();
  
  }
  
    e.preventDefault();
  });
  
  // Local Storage Class
  class Store {
    static getBooks () {
      let books;
        if(localStorage.getItem('books') === null) {
          books = [];
        } else {
          books = JSON.parse(localStorage.getItem('books'));
        }
        
        return books;
    }
  
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach(function(book) {
        const ui = new UI;
  
        //Add Book To UI
        ui.addBookToList(book);
      });
    }
  
    static addBook(book) {
       const books = Store.getBooks();
       
       books.push(book);
  
       localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(pages) {
      const books = Store.getBooks();
  
      books.forEach(function(book, index) {
        if(book.pages === pages) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', Store.displayBooks);
  
  // Delete Book Event Listener 
  document.getElementById('book-list').addEventListener('click', function(e) {
  
   // Instantiate UI
    const ui = new UI();
  
    ui.deleteBook(e.target);
  
    // Remove From Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
  
    ui.showAlert('Book Removed!', 'success');
  
    e.preventDefault();
  });
  