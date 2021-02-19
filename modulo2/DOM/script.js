const formHtml = document.getElementById('formTareas');
const inputHtml = document.getElementById('tarea');
const listaHtml = document.getElementById('listaTareas');

// inputHtml.value = 'practicar JS'

// Agregar tareas a la lista
formHtml.onsubmit = function (event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = inputHtml.value;
    listaHtml.appendChild(li);
}


// Mostrar nombre de usuario
const apodoUsuarioHtml = document.getElementById('apodoUsuario');
function mostrarApodo() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (usuarioLogueado) {
        apodoUsuarioHtml.innerHTML = usuarioLogueado.apodo + ` <button onclick="cerrarSesion()">Cerrar Sesión</button> `;
    } else {
        apodoUsuarioHtml.innerHTML = `<a href="./login.html">Login</a>`
    }
}

//Cerrar Sesión
function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    window.location.reload();
}

mostrarApodo();