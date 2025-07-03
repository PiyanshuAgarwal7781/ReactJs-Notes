import React from 'react'
import "./Register.css"
import { useForm } from 'react-hook-form'

    
export default function Register() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    function handelfomsubmit(userobj){
        console.log(userobj);
    }
  return (
    <div id="register">
        <div id="form">
        <h3>Register</h3>
        <p>Sign up now and get full access to our app.</p>
            <form onSubmit={handleSubmit(handelfomsubmit)} >
                <div id="   ">
                    <label htmlFor="User">User ID   (Roll no)</label>
                    <input  {...register('user',{required:true})} type="text" placeholder='23071A04B8  ' />
                </div>
                <div id="name">
                    <label htmlFor="name">Name</label>
                    <input {...register('name',{required:true})} type="text" placeholder='Dhoni' id="name" />
                </div>
                <div id="email">
                    <label htmlFor="EMail">Email</label>
                    <input {...register('Email',{required:true})} type="email" placeholder='msdhoni@csk.in' />
                </div>
                <div id="password">
                    <label htmlFor="Password">Password</label>
                    <input required   {...register('password')} type="password" name="" id="Password"  placeholder='*********' />
                </div>
                <div id="pin">
                    <label htmlFor="Pin">Pin</label>
                    <input maxLength="4"  {...register('pin',{required:true,minLength:4,maxLength:4})} type="password" placeholder='****' />
                </div>
                <button>Send OTP</button>
            </form>
                <p id="check" >Already have an account? <a href="#">Login</a></p>
        </div>
        
    </div>
  )
}
