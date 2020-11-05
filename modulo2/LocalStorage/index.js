//-------- Práctica de Alta, lectura, baja y modificación con localStorage --------

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
const emailModalInput = document.getElementById('emailModal');
const birthDateModalInput = document.getElementById('birthDateModal');
const divisionModalInput = document.getElementById('divisionModal');
const formEdit = document.getElementById('formEdit');
let editUserId = '';
const search = document.getElementById('search');
const searchForm = document.getElementById('searchForm');

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

formUser.onsubmit = (e) => {
    e.preventDefault();
    // Traer la lista de usuarios de localStorage.
    // Sino existe la clave 'users', devuelve un arreglo vacío.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Guardar en variables los valores ingresados por el usuario.
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
    // Actualizar la tabla en el html llamando a la función displayAllUsers(). 
    displayAllUsers();
}

const getModal = (user) => {
    // Esta función devuelve el modal con todos los datos del usuario.
    const createdAt = new Date(user.createdAt);
    return `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal${user.id}">
        Mostrar
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="modal${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${user.nickname}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Nombre: ${user.name} ${user.lastName}</p>
                    <p>Email: ${user.email}</p>
                    <p>Fecha de nacimiento: ${user.birthDate}</p>
                    <p>Seniority: ${user.division}</p>
                    <p>Fecha de registro: ${createdAt.toLocaleString()}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `
}

const loadForm = (userId) => {
    // Mostrar datos del usuario seleccionado, en los campos del formulario.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.id === userId);
    emailModalInput.value = user.email;
    birthDateModalInput.value = user.birthDate;
    divisionModalInput.value = user.division;
    editUserId = userId;
}

function displayAllUsers() {
    // Lista de usuarios traída de localStorage.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log("displayAllUsers -> users", users)
    displayUsers(users);
}

function deleteUser(userId) {
    // Traer la lista de usuarios de localStorage.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Eliminar un usuario, usando filter() para filtrar el usuario
    // que coincide con el id recibido por parámetros.
    const filteredUsers = users.filter((user) => user.id !== userId);
    // El método filter() de los arrays nos ahorra tener que escribir un for () como:
    // let filtered = []
    // for (let i = 0; i < users.length; i++) {
    //     const user = users[i];
    //     if (user.id !== userId) {
    //         filtered.push(user)
    //     }
    // }
    // Guardar lista de usuarios en localStorage.
    const usersJson = JSON.stringify(filteredUsers);
    localStorage.setItem('users', usersJson);
    // Actualizar la tabla en el html llamando a la función displayAllUsers(). 
    displayAllUsers();
}

formEdit.onsubmit = (e) => {
    e.preventDefault()
    // Traer la lista de usuarios de localStorage,
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Guardar en variables los valores ingresados por el usuario.
    const email = emailModalInput.value;
    const birthDate = birthDateModalInput.value;
    const division = divisionModalInput.value;
    const createdAt = Date.now();
    // Actualizar un usuario del array, usando map().
    // const updatedUsers = users.map((u) => {
    //     if (u.id === editUserId) {
    //         // Usar spread syntax para copiar las propiedades de un objeto a otro.
    //         const user = {
    //             ...u,
    //             email,
    //             birthDate,
    //             division,
    //         }
    //         return user;
    //     } else {
    //         // Retornar el usuario sin modificar en los casos que no coincida el id.
    //         return u;
    //     }
    // });
    // Esto puede ser expresado también con el operador ternario:
    const updatedUsers = users.map((u) => (
        (u.id === editUserId) ? { ...u, email, birthDate, division, createdAt } : u
    ));
    // Guardar lista de usuarios en localStorage.
    const usersJson = JSON.stringify(updatedUsers);
    localStorage.setItem('users', usersJson);
    formEdit.reset();
    displayAllUsers();
    // Ocultar el modal con las funciones incluidas en jQuery.
    $('#editModal').modal('hide');
}

function displayUsers(users) {
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
            <td>
                ${getModal(user)}

                <!-- Button trigger modal edit -->
                <button type="button" class="btn btn-warning text-white" data-toggle="modal" data-target="#editModal" onclick="loadForm('${user.id}')"><i class="far fa-edit"></i></button>

                <button onclick="deleteUser('${user.id}')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
            </td>
        </tr>
        `;
        // Agregamos el string de la fila al array rows.
        rows.push(tr);
    }
    // Unimos todas las filas en un solo string con join(),
    // y lo insertamos en el contenido de la tabla.
    usersTable.innerHTML = rows.join('');
}

let timeOut;
search.oninput = (e) => {
    // e.preventDefault();
    if (timeOut) {
        clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const term = search.value;
        console.log("term", term)
        const filteredUsers = users.filter(u => (
            u.name.toLowerCase().includes(term.toLowerCase())
            || u.lastName.toLowerCase().includes(term.toLowerCase())
        ))
        displayUsers(filteredUsers);
    }, 1000);
}

displayAllUsers();

