import React from 'react'
import "./Register.css"
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

    
export default function Register() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    function handelfomsubmit(userobj){
        console.log(userobj);
    }
  return (
    <div id="register">
        <div id="formregister">
        <h3>Register</h3>
        <p>Sign up now and get full access to our app.</p>
            <form onSubmit={handleSubmit(handelfomsubmit)} >
                <div id="   ">
                    <label htmlFor="User">User ID   (Roll no)</label>
                    <input  {...register('user',{required:true})} type="text" placeholder='23071A04B8  ' />
                    {errors.user?.type=="required" && <p className="err" >Enter the feild </p> }
                </div>
                <div id="name">
                    <label htmlFor="name">Name</label>
                    <input {...register('name',{required:true})} type="text" placeholder='Dhoni' id="name" />
                    {errors.name?.type=="required" && <p className="err" >Enter the feild </p> }
                </div>
                <div id="email">
                    <label htmlFor="EMail">Email</label>
                    <input {...register('Email',{required:true})} type="email" placeholder='msdhoni@csk.in' />
                    {errors.Email?.type=="required" && <p className="err" >Enter the feild </p> }
                </div>
                <div id="password">
                    <label htmlFor="Password">Password</label>
                    <input  {...register("Password",{required:true})} type="password"  id="Password"  placeholder='*********' />
                    {errors.Password?.type=="required" && <p className="err" >Enter the feild </p> }
                </div>
                <div id="pin">
                    <label htmlFor="Pin">Pin</label>
                    <input maxLength="4"  {...register('pin',{required:true})} type="password" placeholder='****' />
                </div>
                <button>Register</button>
            </form>
            <span><p id="check" >Already have an account?</p>
            <Link to="/Login"><li>Login</li></Link> 
            </span>
                
                
        </div>
        
    </div>
  )
}
