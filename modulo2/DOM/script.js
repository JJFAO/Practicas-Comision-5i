const formHtml = document.getElementById('formTareas');
const inputHtml = document.getElementById('tarea');
const listaHtml = document.getElementById('listaTareas');
const apodoUsuarioHtml = document.getElementById('apodoUsuario');

// inputHtml.value = 'practicar JS'

formHtml.onsubmit = function (event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = inputHtml.value;
    listaHtml.appendChild(li);
}

function mostrarApodo() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (usuarioLogueado) {
        apodoUsuarioHtml.innerHTML = usuarioLogueado.apodo + ` <button onclick="cerrarSesion()">Cerrar Sesión</button> `;
    } else {
        apodoUsuarioHtml.innerHTML = `<a href="./login.html">Login</a>`
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    window.location.reload();
}

mostrarApodo();