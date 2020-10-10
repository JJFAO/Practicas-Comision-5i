const tareas = []

const form = document.getElementById('form-tareas')

form.onsubmit= (e) => {
    e.preventDefault()
    const tarea = document.getElementById('tarea')
    const tareaText = tarea.value
    tarea.value= ''
    console.log(tareaText);
    tareas.push(tareaText)
    const listaTareas = document.getElementById('lista-tareas')
    listaTareas.innerHTML = ''
    for (let i = 0; i < tareas.length; i++) {
        listaTareas.innerHTML += '<li class="list-group-item">' + tareas[i] + '</li>'
    }

    // const listaTempalte = tareas.map(t => '<li class="list-group-item">' + t + '</li>')
    // listaTareas.innerHTML = listaTempalte.join('')
}