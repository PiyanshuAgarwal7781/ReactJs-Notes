import React from 'react'
import "./Loader.css"
import { Link } from 'react-router-dom'

export default function LoaderPage() {
  return (
    <div id="main" >
        <div id="content">
            <div id="uppar">
                <img src="image.png" alt="" />
                <h1>Kampus pay </h1>
            </div>
            <div id="middle">
            <h2>Welcome To Kampus Pay!</h2>
            <pre id="font" > <h3>Digital campus payment and Budegeting  Application</h3></pre> 
            </div>
            <div id="btn">
                <Link id="Link1" to="Register"><li>Register</li></Link>
                <Link id="Link2" to="Login" ><li>login</li></Link>
            </div>
        </div>
    </div>
  )
}
