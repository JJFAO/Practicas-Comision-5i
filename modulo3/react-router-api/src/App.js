import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
import Header from './components/Header';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import Login from './pages/Login';
import Axios from 'axios';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState('');

    const loginAsAdmin = () => {
        setIsAdmin(true);
    };

    return isAdmin ? (
        <AdminDashboard />
    ) : (
        <Router>
            <Switch>
                <Route path="/404" exact>
                    <NotFound404 />
                </Route>

                <UserRoutes loginAsAdmin={loginAsAdmin} user={user} setUser={setUser} />
            </Switch>
        </Router>
    );
}

function AdminDashboard() {
    return <div>Panel Admin</div>;
}

function UserRoutes(props) {
    const { loginAsAdmin, user, setUser } = props;
    return (
        <Route path="/">
            <Header user={user} />

            <Switch>
                <Route path="/harry-potter">
                    <Movies />
                </Route>

                <Route path="/details/:idMovie">
                    <Details />
                </Route>

                <Route path="/login">
                    <Login loginAsAdmin={loginAsAdmin} setUser={setUser} />
                </Route>

                <Route path="/" exact>
                    Home
                </Route>

                <Route path="/">
                    <Redirect to="/404" />
                </Route>
            </Switch>

            <Footer />
        </Route>
    );
}

function NotFound404() {
    return (
        <div>
            <h1>404</h1>
            <Button as={Link} to="/">
                Volver al Inicio
            </Button>
        </div>
    );
}

function Details() {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        try {
            const resp = await Axios.get(`http://www.omdbapi.com/?i=${idMovie}&apikey=facef525`);
            if (resp.data.Response === 'False') {
                window.alert('Error en el servidor');
                return;
            }
            setMovie(resp.data);
        } catch (error) {
            console.log(error.data);
        }
    };

    return (
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <span>{movie.imdbRating}</span>
            <br/>
            <img src={movie.Poster} alt=""/>
        </div>
    );
}

export default App;
