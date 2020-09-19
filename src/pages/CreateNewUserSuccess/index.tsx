import React from "react";
import Conclued from "../../components/Conclued";

import "./styles.css";

function CreateNewUserSuccess() {
  return (
    <div id="page-login">
      <Conclued
        title="Cadastro concluído"
        description="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência. "
        labelButtom="Fazer login"
        redirect="/"
        newLine={true}
      />
    </div>
  );
}
export default CreateNewUserSuccess;
