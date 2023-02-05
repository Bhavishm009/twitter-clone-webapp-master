import React, { useState } from "react";
import style from "./Input.module.css";

function Input(props) {
    const [value, setValue] = useState("")
    function handleChange(e) {
        setValue(e.target.value)
    }

  return (
    <div className={style.inputContainer}>
      <input
        type={props.type}
        className={`${style.inputField} ${props.customStyleInput}`}
        placeholder={props.placeholder}
        onChange={props.handleChange} value={props.value}
      />
      <label className={value && "filled"}>{props.label}</label>
    </div>
  );
}

export default Input;
