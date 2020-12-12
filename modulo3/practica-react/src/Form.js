import {useState} from 'react';
import {Form, InputGroup, Button, Col} from 'react-bootstrap';
import {getStorageArray, setStorage} from './utils';

// Para este componente copiamos el ejemplo de formulario con validaciones de react Bootstrap,
// editamos su contenido y agregamos las funciones y estados necesarios.
export default function TheForm() {
    const [validated, setValidated] = useState(false);
    // En el state input guardaremos un objeto con los datos ingresados por el usuario en el form.
    // Inicializamos las 3 propiedades para cada input con un string vacío.
    const [input, setInput] = useState({title: '', image: '', description: ''});


    // Esta función se llama en cada input en el evento change.
    const handleChange = (e) => {
        // Extraemos y guardamos en variables, el nombre y el valor del input en el que escribió el usuario.
        const name = e.target['name'];
        const value = e.target.value;
        // Declaramos un objeto que contiene las propiedades del state input,
        // más lo que escribe el usuario usando el name y value para agregar un propiedad.
        const obj = {...input, [name]: value};
        // Y finalmente actualizamos el state input con ese objeto.
        setInput(obj);
    };


    // Esta función callback es la que se llamará en el evento submit del form.
    const handleSubmit = (event) => {
        const form = event.target;
        event.preventDefault();
        event.stopPropagation();
        // Cuando el Form recibe true en la prop validated, se muestran las validaciones.
        setValidated(true);
        // Con el DOM los elementos <form> cuentan con un método checkValidity(),
        // para comprobar la validez de sus inputs.
        if (form.checkValidity() === true) {
            // Usamos nuestras funciones personalizadas, getStorageArray y setStorage, para manipular el localStorage.
            const articles = getStorageArray('articles');
            const updatedArticles = [...articles, input];
            // articles.push(input); // Esto es equivalente a la linea de arriba, que utiliza spread syntax.
            setStorage('articles', updatedArticles);
        }
    };


    return (
        <div style={{ width: '500px', margin: 'auto' }} className="mt-5">
            {/* Al Form le asignamos en el evento submit nuestro callback handleSubmit. */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Título</Form.Label>
                    {/* A cada Form.Control, que son los <input>, le asignamos en el evento onChange nuestro callback handleChange. */}
                    <Form.Control name="title" required type="text" onChange={handleChange} />
                    <Form.Control.Feedback>se ve bien!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">no se ve bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control name="image" required type="text" onChange={handleChange} />
                    <Form.Control.Feedback>se ve bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} onChange={handleChange} />
                </Form.Group>
                <Button type="submit">Cargar artículo</Button>
            </Form>
        </div>
    );
}
