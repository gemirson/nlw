import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import PageHeaderAccess from "../../components/PageHeaderAccess";
import backIcon from "../../assets/images/icons/back.svg";
import InputLogin from "../../components/InputLogin/Index";
import InputStandard from "../../components/InputStandard/Index";

import "./styles.css";

function CreateNewUser() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    history.push("/create-success");
  }

  const isEnabled =
    email.length > 0 &&
    password.length > 0 &&
    name.length > 0 &&
    lastName.length > 0;
  return (
    <div id="page-newUser">
      <PageHeaderAccess />

      <main>
        <Link to="/" className="returnLogin">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Cadastro</legend>
            <h1>Preencha os dados abaixo para começar.</h1>
            <InputLogin
              name="name"
              label="Nome"
              isPassword={false}
              isTop={true}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <InputStandard
              name="lastName"
              label="Sobrenome"
              type="text"
              isRounded={true}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <InputStandard
              name="email"
              label="E-mail"
              type="text"
              isRounded={true}
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
          </fieldset>

          <button disabled={!isEnabled} type="submit">
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}
export default CreateNewUser;
