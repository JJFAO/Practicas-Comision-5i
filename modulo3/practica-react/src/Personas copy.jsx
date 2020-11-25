import { useState } from 'react'

export default function Personas() {
    const [personas, setPersonas] = useState([])

    const lista = personas.map((p, i) => <li key={i}>{p}</li>)
    const handleClick = () => {
        const array = [...personas, 'Rick']
        setPersonas(array)
        console.log(personas)
    }
    return (
        <>
            <h3 className="my-5">Personas</h3>
            <ul>{lista}</ul>
            <button className="btn btn-danger" onClick={handleClick}>Agregar persona</button>
        </>
    );
}
