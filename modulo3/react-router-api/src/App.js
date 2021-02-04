import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
import NotFound404 from './pages/NotFound404';
import UserRoutes from './UserRoutes';

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


export default App;
