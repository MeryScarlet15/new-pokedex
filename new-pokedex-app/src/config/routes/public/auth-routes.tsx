import React from "react";
import { Switch, Route } from "react-router";
import Home from "../../../pages/home/home";
import Login from "../../../containers/home/login/login";

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home>
          <Login />
        </Home>
      </Route>
    </Switch>
  );
};

export default AuthRoutes;
