const table = document.getElementById("table");
const button = document.getElementById("button");

class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }


function addBook() {
  const list = document.getElementById('book-list');
  const row = document.createElement("tr");

  row.innerHTML = `
                    <td> <input type="checkbox" onClick="update()" /> </td>
                    <td style="flex-grow: 2"> ${title.value} </td>
                    <td style="flex-grow: 2"> ${author.value} </td>
                    <td style="flex-grow: 2"> ${pages.value} </td>
                    <td> <span onClick="remove()"> X </span> </td>
                    `;

  list.appendChild(row);
}

button.addEventListener("click", function (e) {
  if (title.value === "" || author.value === "" || pages.value === "" ) {
    validation("Do not leave empty fields", "unsuccess");
  } else {
    addBook();
    validation("Booked Added", "success");
  }
});

function remove(event) {
  this.event.target.parentElement.parentElement.remove();
}

function validation(message, className) {
  const div = document.createElement("div");
  div.className = className;
  div.appendChild(document.createTextNode(message));

  const titulo = document.querySelector("h1");

  titulo.insertBefore(div, null);

  setTimeout(function () {
    document.querySelector(`.${className}`).remove();
  }, 3000);
}

function update(event) {
  if (this.event.target.checked) {
    this.event.target.parentElement.parentElement.classList.add("read");
  } else {
    this.event.target.parentElement.parentElement.classList.remove("read");
  }
}

function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
  }

  