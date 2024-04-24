import React from "react";

import { useNavigate } from "react-router-dom";

import FormLogin from "../layouts/Login/FormLogin";

import HeadCreateLogin from "./../layouts/CreateLogin/HeadCreateLogin";

export default function CreateLogin(){
  const navigate = useNavigate();
  function handleSubmit(user){
    if(!user.name || !user.password){
      alert("Campos vazios vazio")
      return
    }else if(user.password.length < 6){
      alert("Senha tem que ter no minimo 6 caracteres");
      return
    }

    fetch("http://localhost:5000/users", {
    method: "Post",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(user)
  }).then(resp => resp.json()).then(data =>{
    alert("usuario criado com sucesso");
    navigate("/");
  }).catch(err => console.log(err));
  }
  return (
    <div className="login">
      <HeadCreateLogin />
      <FormLogin handleOnSubmit={handleSubmit} text="Tem conta?" text2="Entrar na conta" submitText="Create acount" path="/" />
    </div>
  )
}
