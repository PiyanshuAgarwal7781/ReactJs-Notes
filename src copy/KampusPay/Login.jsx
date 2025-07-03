import React from 'react'
import "./Login.css"
import { useForm } from 'react-hook-form'

export default function Login() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    function handleformsubmit(userdetail){
        console.log(userdetail);
    }
  return (
    <div id='login'>
        <div id="form">
            <h2 id="h2" >Login</h2>
            <p>Sign in to access your account.</p>
            <form onSubmit={handleSubmit(handleformsubmit)} >
                <div id="user">
                    <label htmlFor="User id">User ID</label>
                    <input  placeholder='Enter your User ID' {...register("user")} type="text"  id="user id" />
                </div>
                <div id="password">
                    <label htmlFor="Pass">Password</label>
                    <input {...register("password")} type="password"  id="password" />
                </div>
                <button>Login</button>
            </form>
            <p id="bottom" >Don't have an account?  <a href="#">Register</a> </p>
        </div>
    </div>
  )
}
