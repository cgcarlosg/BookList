const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const table = document.getElementById("tabla");
const boton = document.getElementById("boton");

function agregarTarea() {
  const list = document.getElementById('book-list');
  const row = document.createElement("tr");

  row.innerHTML = `
                    <td> <input type="checkbox" onClick="completar()" /> </td>
                    <td style="flex-grow: 2"> ${title.value} </td>
                    <td style="flex-grow: 2"> ${author.value} </td>
                    <td style="flex-grow: 2"> ${pages.value} </td>
                    <td> <span onClick="borrar()"> X </span> </td>
                    `;

  list.appendChild(row);
}

boton.addEventListener("click", function (e) {
  if (title.value === "" || author.value === "" || pages.value === "" ) {
    validacion("introduce una tarea", "fallo");
  } else {
    agregarTarea();
    validacion("Tarea añadida con éxito", "exito");
  }
});

function borrar(event) {
  this.event.target.parentElement.parentElement.remove();
}

function validacion(mensaje, clase) {
  const div = document.createElement("div");
  div.className = clase;
  div.appendChild(document.createTextNode(mensaje));

  const titulo = document.querySelector("h1");

  titulo.insertBefore(div, null);

  setTimeout(function () {
    document.querySelector(`.${clase}`).remove();
  }, 3000);
}

function completar(event) {
  if (this.event.target.checked) {
    this.event.target.parentElement.parentElement.classList.add("completado");
  } else {
    this.event.target.parentElement.parentElement.classList.remove("completado");
  }
}
  