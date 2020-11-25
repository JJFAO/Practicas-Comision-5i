import { useState } from 'react'

export default function Personas() {
    // Declaramos dos state, uno para guardar el array de nombres y otro para guardar el nombre a agregar.
    const [personas, setPersonas] = useState([])
    const [nombre, setNombre] = useState('')

    const lista = personas.map((p, i) => <li key={i}>{p}</li>)

    // La función que se llama en el evento click del botón
    const handleClick = () => {
         // Para agregar un elemento al array utilizamos spread syntax, con el que copiamos los elementos previos y le agregamos uno nuevo.
        const array = [...personas, nombre]
        setPersonas(array)
    }

    // La función que se llama en el evento change del input
    const handleChange = (e) => {
        setNombre(e.target.value)
    }
    return (
        <>
            <h3 className="my-5">Personas</h3>
            <ul>{lista}</ul>
            <input type="text" onChange={handleChange} />
            <button className="btn btn-danger" onClick={handleClick}>Agregar persona</button>
        </>
    );
}
