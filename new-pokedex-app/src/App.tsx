import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AuthRoutes from "./config/routes/public/auth-routes";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <AuthRoutes />
      </Router>
    </div>
  );
};

export default App;
