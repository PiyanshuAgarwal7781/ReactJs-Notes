import React from 'react'
import {useForm} from 'react-hook-form'
// import { useNavigate } from 'react-router-dom';

export default function Registor() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    // let navigate = useNavigate();
    function handleFormSubmit(userobj){
        console.log(userobj);
        // http post req
        fetch('http://localhost:3000/user',{
            method:"POST",
            headers:{"Content-Type":'application/json'},
             body:JSON.stringify(userobj)
        })
        // .then((res)=>{if(res.status===201){navigate("/Login")}})
        // .catch((err)=>{console.log("something errror occured ")})
    }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div id="info">
            <div id="username">
                <label htmlFor="un">username</label>
                <input type="text"id="un" {...register('username',{required:true})} />
                {errors.username?.type=="required" && <p>Enter the username</p> }
            </div>
            <div id="pass">
                <label htmlFor="p">password</label>
                <input type="password"id="p" {...register('pass',{required:true})} />
            </div>
            <div id="email">
                <label htmlFor="em">email</label>
                <input type="email"id="em" {...register('email',{required:true})} />
            </div>
            <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
