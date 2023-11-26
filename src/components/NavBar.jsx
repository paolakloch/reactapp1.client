import React from 'react';
import logo from './../assets/img/logo.png';
import './NavBar.scss';
import { useNavigate } from 'react-router-dom';
import routesUrls from '../utils/routesUrls';

const NavBar = ({ children }) => {
  const navigate = useNavigate();

  const obterTamanhoTela = () => {
    alert(window.innerWidth);
  }

  const goToPage = (page) => {
    navigate(page);
  }

  return (
    <>
      <nav className='navBar' >
        <div className='navLogo'>
          <img src={logo} alt="logo" onClick={() => goToPage(routesUrls.home)} />
        </div>
        <div className='navButton'>
          <button onClick={() => goToPage(routesUrls.empresa)}>
            Minha Empresa
          </button>
        </div>
        <div className='navButton'>
          <button onClick={() => goToPage(routesUrls.about)}>
            Sobre
          </button>
        </div>
        <div className='navButton'>
          <button onClick={obterTamanhoTela}>
            Sobre
          </button>

        </div>

      </nav>
      {children}
    </>

  );
};

export default NavBar;
