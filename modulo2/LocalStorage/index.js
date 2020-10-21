//-------- Práctica de Alta y lectura con localStorage --------

const formUser = document.getElementById('formUser');
const nicknameInput = document.getElementById('nickname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usersUl = document.getElementById('usersList');

formUser.onsubmit = (e) => {
    e.preventDefault();
    // Traer la lista de usuarios de localStorage,
    // y el valor por defecto en caso que no exista.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const nickname = nicknameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    // Agregar un objeto usuario al arreglo.
    users.push({
        nickname: nickname,
        email: email,
        password: password,
    })
    // Guardar lista de usuarios en localStorage.
    const usersJson = JSON.stringify(users);
    localStorage.setItem('users', usersJson);

    console.log("formUser.onsubmit -> users", users);
    // Limpiar todos los campos del formulario con reset().
    formUser.reset();
}

