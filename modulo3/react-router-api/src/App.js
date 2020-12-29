import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect, Link } from 'react-router-dom';
import Articles from './pages/Articles';
import Movies from './pages/Movies';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

function App() {
    const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem('isAdmin')));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const logout = () => {
        setIsAdmin(false);
        setUser();
        window.location.reload();
        window.location.href = '/';
    };

    return isAdmin ? (
        <AdminRoutes user={user} logout={logout} />
    ) : (
        <UserRoutes user={user} setUser={setUser} setIsAdmin={setIsAdmin} />
    );
}

function UserRoutes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/404">
                    <h1> 404</h1>
                    <Button as={Link} to="/">
                        Volver al inicio
                    </Button>
                </Route>
                <Route path="/">
                    <Header />
                    <Switch>
                        <Route path="/harry-potter">
                            <Movies />
                        </Route>
                        <Route path="/articulos">
                            <Articles />
                        </Route>
                        <Route path="/login">
                            <Login loginAsAdmin={() => props.setIsAdmin(true)} setUser={props.setUser} />
                        </Route>
                        <Route exact path="/">
                            Home
                        </Route>
                        <Route path="/">
                            {' '}
                            <Redirect to="404" />{' '}
                        </Route>
                    </Switch>
                </Route>
            </Switch>
        </Router>
    );
}

function AdminRoutes(props) {
    return (
        <div>
            <h3>Admin Routes</h3>
            <p>Bienvenido {props.user.name}</p>
            <button onClick={props.logout}>Cerrar Sesión</button>
        </div>
    );
}

function Login(props) {
    const history = useHistory();
    function handleClick() {
        props.setUser({ name: 'JJ' });
        props.loginAsAdmin();
        history.push('admin');
    }
    return (
        <form>
            <button type="button" onClick={handleClick}>
                Ingresar
            </button>
        </form>
    );
}
export default App;
