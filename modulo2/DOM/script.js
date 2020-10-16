const formHtml = document.getElementById('formTareas');
const inputHtml = document.getElementById('tarea');
const listaHtml = document.getElementById('listaTareas');

// inputHtml.value = 'practicar JS'

formHtml.onsubmit = function (event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = inputHtml.value;
    listaHtml.appendChild(li);
}


