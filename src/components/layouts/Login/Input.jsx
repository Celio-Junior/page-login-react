import React from "react";

import styles from "./css/Input.module.css"

function Input({type, placeholder, text, name, value, handleOnChange}){
  return (
    <div className={styles["box-input"]}>
        <input type={type}  placeholder={placeholder} name={name} value={value} onChange={handleOnChange} autoComplete="off"/>
        <span>{text}</span>
      </div>
  )
}

export default Input;
