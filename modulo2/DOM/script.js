const tareas = [];

const form = document.getElementById('formTareas');

function listarTarea(tarea, indice) {
    // return '<li class="list-group-item">' + (indice + 1) + ' - ' + tarea + '</li>';
    return `<li class="list-group-item">${indice + 1} - ${tarea}</li>`;
}

form.onsubmit = function (e) {
    e.preventDefault();
    const listaTareasHtml = document.getElementById('listaTareas');
    const tareaHtml = document.getElementById('tarea');
    const tareaText = tareaHtml.value;
    tareas.push(tareaText);

    // const tareasLi = [];
    // for (let i = 0; i < tareas.length; i++) {
    //     const tareaLi = listarTarea(tareas[i], i);
    //     tareasLi.push(tareaLi);
    // }
    // listaTareasHtml.innerHTML = tareasLi.join('');
    // -- Este tipo de bucles sobre un array son habituales,
    // por eso existen varios métodos de arrays que nos simplifican esta tarea👇. --

    listaTareasHtml.innerHTML = tareas.map(listarTarea).join('');
    // -- Si el retorno de una función o método es un objeto,
    // podemos acceder a sus propiedades en la misma linea. --

    // const listaTemplate = tareas.map(t => '<li class="list-group-item">' + t + '</li>')
    // listaTareasHtml.innerHTML = listaTemplate.join('')

    tareaHtml.value = '';
};
