import React, { useState} from "react";

import {RiLockPasswordFill, RiUser3Fill} from "react-icons/ri";

import Input from "./Input";
import InputsSubmit from "./InputsSubmit";


function FormLogin({handleOnSubmit, text, text2, submitText, path}){
  const [user, setUser] = useState({});

  function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value});
  }

  function submit(e){
    e.preventDefault();
    handleOnSubmit(user);
  }

  return (
    <form onSubmit={submit}>
      <Input type="text"  placeholder="Username" name="name" value={user.name? user.name : ""} text={<RiUser3Fill />} handleOnChange={handleChange}/>

      <Input type="password" placeholder="Password" name="password" value={user.password? user.password : ""} text={<RiLockPasswordFill />} handleOnChange={handleChange} />

      <InputsSubmit text={text} text2={text2} textSubmit={submitText} route={path} />
    </form>
  )
}

export default FormLogin;
