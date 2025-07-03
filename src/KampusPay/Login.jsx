import React from 'react'
import "./Login.css"
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

export default function Login() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    function handleformsubmit(userdetail){
        console.log(userdetail);
    }
  return (
    <div id='login'>
        <div id="formlogin">
            <h2 id="h2" >Login</h2>
            <p>Sign in to access your account.</p>
            <form onSubmit={handleSubmit(handleformsubmit)} >
                <div id="user">
                    <label htmlFor="User id">User ID</label>
                    <input  placeholder='Enter your User ID' {...register("user",{required:true})} type="text"  id="user id" />
                    {errors.user?.type=="required" && <p className="err" >Enter the feild </p> }
                </div>
                <div id="password">
                    <label htmlFor="Pass">Password</label>
                    <input {...register("password",{required:true})} type="password"  id="password" />
                    {errors.password?.type=="required" && <p className="err" >Enter the feild </p> }
                </div>
                
                <button>Login</button>
            </form>
            <p id="bottom" >Don't have an account?  <Link to="/Register"><li>Register</li></Link> </p>
        </div>
    </div>
  )
}
