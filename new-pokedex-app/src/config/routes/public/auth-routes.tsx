import React from "react";
import { Switch, Route } from "react-router";
import Home from "../../../pages/home/home";
import Login from "../../../containers/home/login/login";
import Register from "../../../containers/home/register/register";

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home>
          <Login />
        </Home>
      </Route>

      <Route exact path="/login">
        <Home>
          <Login />
        </Home>
      </Route>

      <Route exact path="/register">
        <Home>
          <Register />
        </Home>
      </Route>
    </Switch>
  );
};

export default AuthRoutes;
