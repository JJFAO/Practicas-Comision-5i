import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
                        <Nav.Link onClick={() => props.changeSection('principal')} >Home</Nav.Link>
                        <Nav.Link onClick={() => props.changeSection('formulario')} >Formulario</Nav.Link>
                        <Nav.Link onClick={() => props.changeSection('articulos')} >Artículos</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}