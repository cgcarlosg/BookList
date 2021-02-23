
const button = document.getElementById('button');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

function addBook() {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
                    <td> <input type="checkbox" onClick="update()" /> </td>
                    <td style="flex-grow: 2"> ${title.value} </td>
                    <td style="flex-grow: 2"> ${author.value} </td>
                    <td style="flex-grow: 2"> ${pages.value} </td>
                    <td> <span onClick="javascript:(function() { this.event.target.parentElement.parentElement.remove(); })()"> X </span> </td>
                    `;

  list.appendChild(row);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
}

function validation(message, className) {
  const div = document.createElement('div');
  div.className = className;
  div.appendChild(document.createTextNode(message));

  const titulo = document.querySelector('h1');

  titulo.insertBefore(div, null);

  setTimeout(() => {
    document.querySelector(`.${className}`).remove();
  }, 3000);
}

function update() {
  if (this.event.target.checked) {
    this.event.target.parentElement.parentElement.classList.add('read');
  } else {
    this.event.target.parentElement.parentElement.classList.remove('read');
  }
}

button.addEventListener('click', () => {
  if (title.value === '' || author.value === '' || pages.value === '') {
    validation('Do not leave empty fields', 'unsuccess');
  } else {
    addBook();
    validation('Booked Added', 'success');
    update();
  }
});
