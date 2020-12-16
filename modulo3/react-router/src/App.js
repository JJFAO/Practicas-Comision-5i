import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Formulario from './pages/Form';
import Articles from './pages/Articles';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/formulario">
                    <Formulario />
                </Route>
                <Route path="/articulos">
                    <Articles />
                </Route>
                <Route path="/">
                    Home
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
