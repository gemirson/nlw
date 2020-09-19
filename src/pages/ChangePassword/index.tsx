import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import PageHeaderAccess from "../../components/PageHeaderAccess";
import backIcon from "../../assets/images/icons/back.svg";
import InputStandard from "../../components/InputStandard/Index";

import "./styles.css";

function ChangePassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    history.push("/change-success");
  }
  const isEnabled = email.length > 0;
  return (
    <div id="page-changePassword">
      <PageHeaderAccess />

      <main>
        <Link to="/" className="returnLogin">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Eita, esqueceu sua senha? </legend>
            <h1>Não esquenta, vamos dar um jeito nisso..</h1>
            <InputStandard
              name="email"
              label="E-mail"
              type="text"
              isRounded={false}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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
export default ChangePassword;
