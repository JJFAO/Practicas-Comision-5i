import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

// Al igual que con los componentes que creamos,
// los componentes de librerías también se deben importar antes de usarlos.

export default function Header(props) {
    return (
        <header className="">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Práctica React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/harry-potter">Harry Potter</Nav.Link>
                    </Nav>
                    <span style={{ color: 'white'}}>{props.user}</span>
                    <Button as={NavLink} to="/login">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
