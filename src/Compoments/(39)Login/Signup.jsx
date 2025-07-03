import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import  { counter_context } from '../../Context/CounterContex';



export default function Signup() {
    let url="http://localhost:3000/user";
    let navigate=useNavigate();
    let {register,handleSubmit}=useForm();
    function handleFOrmsubmit(userobj){
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify(userobj),
        }).then((res)=>{
            if(res.status==201){
                navigate("/Login");
            }
        })
    }
    // context
    let {counter,setcounter}=useContext(counter_context)
    function handlecounter(){
      setcounter(counter+1);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(handleFOrmsubmit)}>
      <div>
        <label htmlFor="">Username</label>
        <input defaultValue="jaii" {...register("username")} type="text" name="" id="" />
      </div>
      <div>
        <label htmlFor="">email</label>
        <input {...register("email")} type="email" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input  defaultValue="god" {...register("password")} type="password" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Dob</label>
        <input {...register("Dob")} type="date" name="" id="" />
      </div>
      <button>Register</button>
      </form>
      <p>{counter}</p>
      <button onClick={handlecounter} >increment</button>
    </div>
  )
}
