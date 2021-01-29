import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



export default function Login({ loginAsAdmin }) {
  const [input, setInput] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.username === 'admin' && input.password === '123') {
      loginAsAdmin();
    }
  }

  return (
    <div>
      Login
      <Form onSubmit={handleSubmit} className="mx-auto card p-5" style={{ width: '500px' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange} name="username" type="text" placeholder="Enter name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}