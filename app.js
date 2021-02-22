// Variables
const myLibrary = [];
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

// events

button.addEventListener("click", function(){
  if (
    titleInput.value == "" && 
    authorInput.value == "" && 
    pagesInput.value == ""
    ) {
        alert("Enter any input");
    } else {
        const bookListRow = document.createElement("tr");

        const newTitle = document.createElement("th");
        newTitle.innerHTML = titleInput.value;
        bookListRow.appendChild(newTitle);

        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = authorInput.value;
        bookListRow.appendChild(newAuthor);

        const newPages = document.createElement("th");
        newPages.innerHTML = pagesInput.value;
        bookListRow.appendChild(newPages);

        bookList.appendChild(bookListRow);
    }
})