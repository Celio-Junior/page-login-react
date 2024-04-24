import React from "react";

import {FaGithub, FaGoogle, FaInstagram} from "react-icons/fa";

import styles from "./css/HeadLogin.module.css";

export default function HeadLogin(){
  return (
    <div className={styles["head-login"]}>
      <h1>Login</h1>
      <div className={styles["head-login-icons"]}>
        <span><FaGithub /></span>
        <span><FaGoogle /></span>
        <span><FaInstagram /></span>
      </div>
    </div>
  )
}
