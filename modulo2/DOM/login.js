const formLogin = document.getElementById('formLogin');
const inputUsuario = document.getElementById('usuario');
const inputContrasenia = document.getElementById('contrasenia');
const alerta = document.getElementById('alerta');

const persona = {
    usuario: 'jj',
    contrasenia: 'asd',
};

formLogin.onsubmit = function (e) {
    e.preventDefault();
    const usuario = inputUsuario.value;
    const contrasenia = inputContrasenia.value;
    const usuarioValido = usuario === persona.usuario &&
        contrasenia === persona.contrasenia;
    if (usuarioValido) {
        alert('Logueo Exitoso');
        window.location.href = 'index.html';
    } else {
        alert('Datos inválidos');
        alerta.classList.remove('d-none');
    }
};
