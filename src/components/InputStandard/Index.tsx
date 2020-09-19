import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputStandardProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  isRounded: boolean;
}

const InputStandard: React.FunctionComponent<InputStandardProps> = ({
  label,
  name,
  isRounded,
  ...rest
}) => {
  return (
    <div className="input-standard-content">
      <input
        type="text"
        id={name}
        className={isRounded ? "borderNormal" : "borderRounded"}
        pattern=".+"
        required
        {...rest}
      />
      <label className="labelTop" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default InputStandard;
