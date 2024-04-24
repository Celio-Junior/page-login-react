import React from "react";

import FormLogin from "../layouts/Login/FormLogin";
import HeadLogin from "../layouts/Login/HeadLogin"
import "./Login.css";

// import

function handleSubmit(user){
  fetch("http://localhost:5000/users", {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    }
  }).then(resp => resp.json()).then(data =>{
    const userlogado = data.find((userLogin) => userLogin.name === user.name && userLogin.password === user.password);

    if(!userlogado){
      alert("Não tem esse usuário");
      return
    }
    alert("Usuario logado com sucesso")
  }).catch(err => console.log(err));
}

export default function Login(){
  return (
    <div className="login">
      <HeadLogin />
      <FormLogin handleOnSubmit={handleSubmit} text="Não tem conta?" text2="Criar conta" submitText="Sign in" path="/createlogin" />
    </div>
  )

}
