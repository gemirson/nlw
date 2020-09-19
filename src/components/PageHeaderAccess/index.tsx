import React from "react";
import LogoImg from "../../assets/images/logo.svg";
import backgroundImg from "../../assets/images/login-background.svg";

import "./styles.css";


function LoginHeader() {
  return (
    <header className="content">
      <img className="background" src={backgroundImg} alt="Voltar" />
      <div className="logo">
        <img src={LogoImg} alt="Voltar" />
        <h2>Sua plataforma de estudos online.</h2>
      </div>
    </header>
  );
}

export default LoginHeader;
