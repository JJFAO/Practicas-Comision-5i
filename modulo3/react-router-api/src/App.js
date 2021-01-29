import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import Login from './pages/Login';
import {useState} from 'react';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    console.log('App - isAdmin', isAdmin);

    return isAdmin ? <AdminDashboard /> : <UserRoutes loginAsAdmin={() => setIsAdmin(true)} />;
}

function AdminDashboard() {
    return <div>Panel Admin</div>;
}

function UserRoutes(props) {
    const {loginAsAdmin} = props;
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/harry-potter">
                    <Movies />
                </Route>
                <Route path="/login">
                    <Login loginAsAdmin={loginAsAdmin} />
                </Route>
                <Route path="/">Home</Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
