import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Articles from './pages/Articles';
import Movies from './pages/Movies';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/harry-potter">
                    <Movies />
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
