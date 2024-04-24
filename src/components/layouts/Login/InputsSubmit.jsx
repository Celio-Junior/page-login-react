import React from "react";

import {Link} from "react-router-dom";

import styles from "./css/InputsSubmit.module.css";

export default function InputsSubmit({text, text2, textSubmit, route}){
  return (
    <div className={styles["inputs-submit"]}>
      <button type="submit">{textSubmit}</button>
      <p>
        {text}
        <Link to={route}>{text2}</Link>
      </p>
    </div>
  )
}
