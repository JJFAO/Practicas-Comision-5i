import {useState} from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import { getStorageArray, setStorage } from './utils';



export default function TheForm() {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({ title: '', image: '', description: '' });
    // const [articles, setArticles] = useState([]);

    const handleSubmit = (event) => {
        const form = event.target;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if (form.checkValidity() === true) {
            const articles = getStorageArray('articles');
            const updatedArticles = [...articles, input];
            setStorage('articles', updatedArticles);
            // setArticles(updatedArticles);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target['name'];
        const obj = { ...input, [name]: value };
        setInput(obj);
    };

    return (
        <div style={{width: '500px', margin: 'auto'}} className="mt-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Título</Form.Label>
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
