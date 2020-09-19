import React, {InputHTMLAttributes} from   'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
label:string;
name:string;

}

const InputP:React.FunctionComponent<InputProps> = ({label,name, ...rest})=> {
  return (
    <div className="input-block">
      <input className="input"  id={ name }  {...rest}/>
      <label className="label" htmlFor={name} >{label}</label>
    </div>
    );
}

export default InputP;