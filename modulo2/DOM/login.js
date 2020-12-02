const formLogin = document.getElementById('formLogin');
const inputUsuario = document.getElementById('usuario');
const inputContrasenia = document.getElementById('contrasenia');
const alerta = document.getElementById('alerta');

const usuarios = [
    {
        apodo: 'jj',
        contrasenia: 'asd',
    },
    {
        apodo: 'jj2',
        contrasenia: 'asd2',
    }
];

formLogin.onsubmit = function (e) {
    e.preventDefault();
    const apodo = inputUsuario.value;
    const contrasenia = inputContrasenia.value;
    const usuarioEncontrado = usuarios.find((usuario) => {
        // Esta función callback declarada en el método find() retorna false,
        // hasta encontrar un usuario que coincida con los datos ingresados.
        // Al cumplirse la condición retorna true, 
        return apodo === usuario.apodo && contrasenia === usuario.contrasenia;
    });
    if (usuarioEncontrado) {
        const usuarioLogueado = { apodo: usuarioEncontrado.apodo };
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));
        alert('Logueo Exitoso');
        window.location.href = 'index.html';
    } else {
        alert('Datos inválidos');
        alerta.classList.remove('d-none');
    }
};
