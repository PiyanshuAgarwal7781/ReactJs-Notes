import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  let {register,handleSubmit}=useForm();
  let [err,seterr]=useState(null);
  let navigate=useNavigate();
  function handleFormSubmit({username,password}){
    fetch(`http://localhost:3000/user?username=${username}&password=${password}`,{method:"GET"})
    .then((res)=>res.json())
    .then((userobj)=>{
      if(userobj.length!=0){
        // console.log(userobj)
        navigate("/UserAccount",{state:userobj})
      }
      else{
        seterr({message:"Somethong went wromg please try again"})
      }
    })
    .catch((err)=>seterr(err))
  }
  return (
    <div>
     <form onSubmit={handleSubmit(handleFormSubmit)} action="">
      <div>
        <label htmlFor="">Username</label>
        <input type="text" {...register("username")} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" {...register("password")} />
      </div>
      <button>Login!</button>
     </form>
    </div>
  )
}
export default Login
