import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Empresa from "./pages/Empresa";
import AboutPage from "./pages/About";
import NavBar from "./components/NavBar";
import routesUrls from "./utils/routesUrls";

const App = () => {
  return (
    <NavBar>
      <Routes>
        <Route path={routesUrls.login} element={<Login />} />
        <Route path={routesUrls.home} element={<HomePage />} />
        <Route path={routesUrls.empresa} element={<Empresa />} />
        <Route path={routesUrls.about} element={<AboutPage />} />
      </Routes>
    </NavBar>
  );
};

export default App;
