import React, { InputHTMLAttributes } from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface HeaderUserdProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description: string;
}

const HeaderUser: React.FunctionComponent<HeaderUserdProps> = ({
  title,
  description,
  ...rest
}) => {
  return (
    <div id="page-managerUser">
      <Link to="/" className="returnLogin">
        <img src={backIcon} alt="Voltar" />
      </Link>
    </div>
  );
};
export default HeaderUser;
