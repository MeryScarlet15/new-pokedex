import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AuthRoutes from "./config/routes/public/auth-routes";
import "./App.css";
import PokedexRoutes from "./config/routes/private/pokedex-routes";

const useToken = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    const token = localStorage.getItem("token");
    const isTokenValid = token ? true : false;
    setIsLogged(isTokenValid);
  };

  return {
    isLogged,
    validateToken,
  };
};

const App: React.FC = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="app">
      <Router>{token ? <PokedexRoutes /> : <AuthRoutes />}</Router>
    </div>
  );
};

export default App;
