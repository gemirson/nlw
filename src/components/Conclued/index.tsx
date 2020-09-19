import React, { InputHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import successBackgroundIcon from "../../assets/images/success-background.svg";
import sucesscheckIcon from "../../assets/images/icons/success-check-icon.svg";

import "./styles.css";

interface ConcluedProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description: string;
  labelButtom: string;
  redirect: string;
  newLine: boolean;
}

const Conclued: React.FunctionComponent<ConcluedProps> = ({
  title,
  description,
  labelButtom,
  redirect,
  newLine,
  ...rest
}) => {
  return (
    <div id="page-conclued">
      <img
        src={successBackgroundIcon}
        alt="Voltar"
        className="backgroundImage"
      />
      <div className="page-conclued-block">
        <img src={sucesscheckIcon} alt="Voltar" />
        <h1>{title}</h1>
        <h2 className={newLine ? "SpecialWidth" : "normalWidth"}>
          {description}
        </h2>
        <Link to={redirect} className="return">
          {labelButtom}
        </Link>
      </div>
    </div>
  );
};
export default Conclued;
