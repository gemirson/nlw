import React, { useState } from "react";

import PageHeaderAccess from "../../components/PageHeaderAccess";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import InputLogin from "../../components/InputLogin/Index";
import InputCheck from "../../components/InputCheck/Index";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEnabled = email.length > 0 && password.length > 0;

  return (
    <div id="page-login">
      <PageHeaderAccess />
      <main>
        <form>
          <fieldset>
            <legend>Fazer login</legend>
            <InputLogin
              name="email"
              label="E-mail"
              isPassword={false}
              isTop={true}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputLogin
              name="password"
              label="Senha"
              isPassword={true}
              isTop={false}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className="block">
              <InputCheck name="remember" label="Lembra-me" />
              <Link to="/change-password" className="remeber">
                <h2>Esqueceu sua senha</h2>
              </Link>
            </div>
          </fieldset>

          <button disabled={!isEnabled} type="submit" className="button">
            Entrar
          </button>
          <footer>
            <p>
              Não tem conta?
              <h2>
                {" "}
                É de graça <img src={purpleHeartIcon} alt="Aviso importante" />
              </h2>
            </p>
            <Link to="/create-user" className="newUser">
              <h1>Cadastra-se</h1>
            </Link>
          </footer>
        </form>
      </main>
    </div>
  );
}
export default Login;
