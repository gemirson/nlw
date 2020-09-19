import React from "react";
import Conclued from "../../components/Conclued";

import "./styles.css";

function ChangePasswordSuccess() {
  return (
    <div id="page-login">
      <Conclued
        title="Redefinição enviada!"
        description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
        labelButtom="Voltar ao login"
        redirect="/"
        newLine={false}
      />
    </div>
  );
}
export default ChangePasswordSuccess;
