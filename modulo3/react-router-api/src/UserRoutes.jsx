import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Movies from "./pages/Movies";


export default function UserRoutes(props) {
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