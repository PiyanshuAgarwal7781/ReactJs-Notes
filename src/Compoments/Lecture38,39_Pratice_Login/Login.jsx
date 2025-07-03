import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';

export default function Login() {
    let {register,handleSubmit}=useForm();
    let [msg,setMSg]=useState(null);
    function handleFormSubmit({username,password}){
        fetch(`http://localhost:3000/user?username=${username}&password=${password}`)
        .then(res=>res.json())
        .then((userarray)=>{
            if(userarray.length!==0){
                console.log(userarray)
            }
            else{
                setMSg("invaild username or password");
            }
        })
        .catch((err)=>{
            console.log("something error occured")
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {msg && <p>{msg}</p> }
        <div id="username">
            <label htmlFor="un">username</label>
            <input type="text" {...register('username')} id="un" />
        </div>
        <div id="pass">
            <label htmlFor="p">password</label>
            <input type="password" {...register('pass')} id="p" />
        </div>
        <button>login</button>
      </form>
    </div>
  )
}
