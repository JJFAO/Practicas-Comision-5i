//-------- Práctica de Alta y lectura con localStorage --------

const formUser = document.getElementById('formUser');
const nicknameInput = document.getElementById('nickname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usersUl = document.getElementById('usersList');
const usersTable = document.getElementById('usersTable');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const birthDateInput = document.getElementById('birthDate');
const divisionInput = document.getElementById('division');

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

formUser.onsubmit = (e) => {
    e.preventDefault();
    // Traer la lista de usuarios de localStorage,
    // y el valor por defecto en caso que no exista.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const nickname = nicknameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const birthDate = birthDateInput.value;
    const division = divisionInput.value;

    // Agregar un objeto usuario al arreglo.
    users.push({
        nickname: nickname,
        email: email,
        password: password,
        name: name,
        lastName: lastName,
        birthDate: birthDate,
        division: division,
        id: generateId(),
        createdAt: Date.now()
    })
    // Guardar lista de usuarios en localStorage.
    const usersJson = JSON.stringify(users);
    localStorage.setItem('users', usersJson);

    console.log("formUser.onsubmit -> users", users);
    // Limpiar todos los campos del formulario con reset().
    formUser.reset();
    displayUser();
}

function displayUser() {
    // Lista de usuarios traída de localStorage.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const rows = [];
    for (let i = 0; i < users.length; i++) {
        // Guardamos los datos de usuario en user.
        const user = users[i];
        // Creamos en un string una fila para la tabla,
        // con los datos del usuario separados en cada celda.
        const tr = `
        <tr>
            <td>${user.nickname}</td>
            <td>${user.email}</td>
            <td>${user.division || ''}</td>
        </tr>
        `
        // Agregamos el string de la fila al array rows.
        rows.push(tr)
    }
    // Unimos todas las filas en un solo string con join(),
    // y lo insertamos en el contenido de la tabla.
    usersTable.innerHTML = rows.join('')
}

displayUser();


