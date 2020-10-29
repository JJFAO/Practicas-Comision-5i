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
    // Actualizar la tabla en el html llamando a la función displayUser(). 
    displayUser();
}

function displayUser() {
    // Lista de usuarios traída de localStorage.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const rows = [];
    for (let i = 0; i < users.length; i++) {
        // Guardamos los datos de usuario en user.
        const user = users[i];
        const createdAt = new Date(user.createdAt)
        // Creamos en un string una fila para la tabla,
        // con los datos del usuario separados en cada celda.
        const tr = `
        <tr>
            <td>${user.nickname}</td>
            <td>${user.email}</td>
            <td>${user.division || ''}</td>
            <td>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal${user.id}">
                    Mostrar
                </button>
                <button onclick="deleteUser('${user.id}')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
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
            </td>
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

function deleteUser(userId) {
    // Traer la lista de usuarios de localStorage.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Eliminar un usuario, usando filter() para filtrar el usuario
    // que coincide con el id recibido por parámetros.
    const filteredUsers = users.filter((user) => user.id !== userId);
    // Guardar lista de usuarios en localStorage.
    const usersJson = JSON.stringify(filteredUsers);
    localStorage.setItem('users', usersJson);
    // Actualizar la tabla en el html llamando a la función displayUser(). 
    displayUser();
}


