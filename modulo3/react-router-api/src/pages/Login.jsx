import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function Login({ loginAsAdmin, setUser }) {
  const [input, setInput] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(input.username);
    const isAdmin = input.username === 'admin' && input.password === '123';
    if (isAdmin) {
      loginAsAdmin();
    }
    history.push('/');
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