import { useState, useEffect } from 'react'
import axios from 'axios';

import CardPhoto from './CardPhoto';

export default function Photos() {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        // Para poder utilizar funciones asincrónicas dentro de un componente,
        // por ej.una request a una API, debemos emplear el hook useEffect().
        getPhotos()
    }, []) // Pasando como 2do parámetro un array vació, el código dentro del useEffect se ejecuta solo una vez.
    
    const getPhotos = async () => {
        // getPhotos es una función asincrónica
        // Dentro del bloque try, intentamos traer/get datos de jsonPlaceholder, con una request axios.get().
        // Y usar ese dato (un array de photos) para actualizar el state datos.
        try {
            const photos = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setDatos(photos.data.slice(0, 9));
        } catch (error) {
            // El bloque catch se ejecutará en caso de que ocurra algún error en bloque try.
            console.log(error)
        }
    }

    const cards = datos.map((dato, i) => <CardPhoto data={dato} key={i} />);

    return (
        <div>
            <div className="row">
                {cards}
            </div>
        </div>
    )
}
