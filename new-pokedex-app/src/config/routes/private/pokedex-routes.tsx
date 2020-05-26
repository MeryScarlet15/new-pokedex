import React from "react";
import { Switch, Route } from "react-router";
import Home from "../../../pages/home/home";
import Login from "../../../containers/home/login/login";
import Register from "../../../containers/home/register/register";
import Pokedex from "../../../pages/pokedex/pokedex";
import PokedexList from "../../../containers/pokedex/pokedex-list/pokedex-list";

const PokedexRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Pokedex>
          <PokedexList />
        </Pokedex>
      </Route>

      <Route exact path="/pokedex">
        <Pokedex>
          <PokedexList />
        </Pokedex>
      </Route>
    </Switch>
  );
};

export default PokedexRoutes;
