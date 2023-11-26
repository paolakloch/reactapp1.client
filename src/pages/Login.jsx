// Exemplo de componente para outra rota
import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/img/logo.png";
import routesUrls from "../utils/routesUrls";

const Login = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(routesUrls.home);
  };

  return (
    <div className="login-page">
      <form className="login-form">
        <div className="login-logo">
          <img src={logo} alt="Logo MindPlus" />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            autoFocus={true}
            className="shadow-lg"
          />
        </div>
        <div>
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            autoFocus={true}
            className="shadow-lg"
          />
        </div>
        <div className="login-checkbox">
          <label for="checkbox-keep-logged"> Mantenha-me logado</label>
          <input
            type="checkbox"
            id="checkbox-keep-logged"
            name="checkbox-keep-logged"
          />
        </div>
        {/* href="src/pages/homepage.html" */}
        <div className="login-button" onClick={goToHome}>
          <p>Entrar</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
