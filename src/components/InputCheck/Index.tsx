import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const InputCheck: React.FunctionComponent<InputProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <div>
      <label className="ckeck">
        {label}
        <input
          type="checkbox"
          id={name}
          {...rest}
          className="container-block"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default InputCheck;
