//-------- Práctica de Alta, lectura, baja, modificación y búsqueda con localStorage --------

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
    // Al evento submit del formulario de registro le asignamos esta función,
    // que agrega un usuario, con los datos ingresados.

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

    // Limpiar todos los campos del formulario con reset().
    formUser.reset();
    // Actualizar la tabla en el html llamando a la función displayAllUsers(). 
    console.log("Se registró exitosamente un usuario. 👨‍💻");
    displayAllUsers();
}

const getModal = (user) => {
    // Esta función devuelve el código del modal con todos los datos del usuario.

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
    // Esta función carga los datos del usuario seleccionado,
    // en los campos del formulario del documento HTML.

    // Traer la lista de usuarios de localStorage,
    // sino existe la clave 'users', devuelve un arreglo vacío.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Buscar el usuario en el array usando el método find(),
    // comparando el id que recibe por parámetro la función hasta encontrar el usuario que coincide.
    const user = users.find((u) => u.id === userId);
    emailModalInput.value = user.email;
    birthDateModalInput.value = user.birthDate;
    divisionModalInput.value = user.division;
    // Actualizar el valor de la variable global editUserId,
    // para guardar el id del usuario a editar.
    editUserId = userId;
}

function displayUsers(users) {
    // La función ahora recibe por parámetros el array de usuarios que debe insertar en el documento HTML.

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

function displayAllUsers() {
    // Esta función muestra la lista completa de usuarios en la tabla.

    // Traer la lista de usuarios de localStorage,
    // sino existe la clave 'users', devuelve un arreglo vacío.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Llamar a la función displayUsers, pasando por parámetros la lista completa de usuarios.
    displayUsers(users);
    console.log("Se cargó la lista completa de usuarios en la tabla. 👩‍👩‍👧‍👧");
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
    // Al evento submit del formulario de edición le asignamos esta función,
    // que actualiza al usuario seleccionado, con los datos ingresados.

    e.preventDefault()
    // Traer la lista de usuarios de localStorage,
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Guardar en variables los valores ingresados por el usuario.
    const email = emailModalInput.value;
    const birthDate = birthDateModalInput.value;
    const division = divisionModalInput.value;
    // Incluimos una variable nueva que guarda la fecha de modificación,
    // para agregarla al objeto del usuario modificado.
    const updatedAt = Date.now();

    // Actualizar un usuario del array, usando map().
    const updatedUsers = users.map((u) => {
        // Usamos el id de usuario guardado en editUserId,
        // para modificar solo al usuario que coincida con este.
        if (u.id === editUserId) {
            // Usar spread syntax para copiar las propiedades de un objeto a otro.
            const user = {
                ...u,
                email,
                birthDate,
                division,
                updatedAt
            }
            return user;
        } else {
            // Retornar el usuario sin modificar en los casos que no coincida el id.
            return u;
        }
    });

    // Esto puede ser expresado también con el operador ternario:
    // const updatedUsers = users.map((u) => (
    //     (u.id === editUserId) ? {
    //         ...u,
    //         email,
    //         birthDate,
    //         division,
    //         updatedAt
    //     }
    //     : u
    // ));

    // Guardar lista de usuarios en localStorage.
    const usersJson = JSON.stringify(updatedUsers);
    localStorage.setItem('users', usersJson);
    formEdit.reset();
    console.log("Se modificó exitosamente al usuario. 🤪");
    displayAllUsers();
    // Ocultar el modal con las funciones incluidas en jQuery.
    $('#editModal').modal('hide');
}

searchForm.onsubmit = (e) => {
    // Al evento submit de la barra de búsqueda le asignamos esta función,
    // que filtra y muestra los usuarios que coinciden con la búsqueda.

    e.preventDefault();
    // Guardar en una variable la lista completa de usuarios.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Transformar en minúsculas la palabra buscada y guardarla en una variable.
    const term = search.value.toLowerCase();
    console.log("term", term);
    // Guardar el array resultante de aplicar el método filter sobre el array de usuarios,
    // filtrando para obtener solo los que incluyen la palabra buscada.
    const filteredUsers = users.filter((u) => (
        // Usar el método toLowerCase() para transformar el nombre y apellido a minúscula,
        // y el método includes() que evalúa si se incluye o no la palabra buscada.
        u.name.toLowerCase().includes(term) || u.lastName.toLowerCase().includes(term)
    ))
    // Llamar a la función displayUsers, pasando por parámetros la lista filtrada de usuarios.
    displayUsers(filteredUsers);
        console.log(`Se cargó la lista filtrada de usuarios en la tabla. ${filteredUsers.length} resultados encontrados. 🧐`);
}

// let timeOutID;
// search.oninput = () => {
//     // Al evento oninput del campo de búsqueda le asignamos esta función,
//     // que será llamada cada vez que se presione una tecla,
//     // y que filtra y muestra los usuarios que coinciden con la búsqueda, con un delay o debounce de 1seg.

//     // Cancelar la ejecución de la función declarada en el setTimeOut(),
//     // con el identificador guardado en la variable timeOutID.
//     clearTimeout(timeOutID);

//     // Demorar la ejecución de la búsqueda con la función setTimeOut(),
//     // esta recibe dos parámetros, la función deberá ejecutar y el tiempo de espera en mili-segundos.
//     timeOutID = setTimeout(() => {
//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         const term = search.value.toLowerCase();
//         console.log("term", term)
//         const filteredUsers = users.filter(u => (
//             u.name.toLowerCase().includes(term) || u.lastName.toLowerCase().includes(term)
//         ))
//         displayUsers(filteredUsers);
//         console.log(`Se cargó la lista filtrada de usuarios en la tabla. ${filteredUsers.length} resultados encontrados. 🧐`);
//     }, 1000);
// }

displayAllUsers();

