import React, { InputHTMLAttributes, useState } from "react";
import eyesEnable from "../../assets/images/icons/eyes-visible.svg";
import eyesDisable from "../../assets/images/icons/Group.svg";

import "./styles.css";

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  isTop: boolean;
  isPassword: boolean;
}

const InputLogin: React.FunctionComponent<InputLoginProps> = ({
  label,
  name,
  isTop,
  isPassword,
  ...rest
}) => {
  var [isVisible, setIsVisible] = useState(true);
  var [textInput, setTextInput] = useState("");

  function handleVisible() {
    isVisible = !isVisible;
    setIsVisible(isVisible);
  }

  function SelectType() {
    if (isPassword) {
      return isVisible ? "password" : "text";
    }
    return "text";
  }
  return (
    <div className="input-content">
      <input
        type={SelectType()}
        id={name}
        className={isTop ? "borderTop" : "borderBottom"}
        pattern=".+"
        required
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
        {...rest}
      />
      <label className="labelTop" htmlFor={name}>
        {label}
      </label>
      {isPassword && (
        <div className="visiblePassword">
          <i onClick={handleVisible}>
            <img
              src={isVisible ? eyesEnable : eyesDisable}
              alt="Visibilidade"
            />
          </i>
        </div>
      )}
    </div>
  );
};

export default InputLogin;
