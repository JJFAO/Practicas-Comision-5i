import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useState } from 'react';

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
                    <h1>404</h1>
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

export default App;
