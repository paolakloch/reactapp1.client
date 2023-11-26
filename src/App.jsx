import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Empresa from './pages/Empresa';
import AboutPage from './pages/Aboutpage';
import NavBar from './components/NavBar';
import routesUrls from './utils/routesUrls';

const App = () => {
  return (
    <NavBar>
      <Routes>
        <Route path={routesUrls.home} element={<HomePage />} />
        <Route path={routesUrls.empresa} element={<Empresa />} />
        <Route path={routesUrls.about} element={<AboutPage />} />
      </Routes>
    </NavBar>
  );
};

export default App;