import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "Pages/index.scss";

import { ContextAPI, ContextProvider } from "Context";
import { SignIn } from "Pages/SignIn";
import { SignUp } from "Pages/SignUp";
import { Main } from "Pages/Main";
import { PrivateRoute } from "Route/PrivateRoute";
import { PublicRoute } from "Route/PublicRoute";

const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};

const Routes = () => {
  const {
    state: { auth },
  } = useContext(ContextAPI);

  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" Component={SignIn} auth={auth} />
        <PublicRoute path="/signin" Component={SignIn} auth={auth} />
        <PublicRoute path="/signup" Component={SignUp} auth={auth} />
        <PrivateRoute path="/dashboard" Component={Main} auth={auth} />
      </Switch>
    </Router>
  );
};

export default App;
