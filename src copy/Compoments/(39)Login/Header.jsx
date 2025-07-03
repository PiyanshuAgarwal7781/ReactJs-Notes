import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id='headerrouting' >
      
        <ul>
          <Link to="Home">
            <li>Home</li>
          </Link>
          <Link to="Signup" ><li>Signup</li> </Link>
          <Link to="Login">
            <li>Login</li>
          </Link>
          <Link to="Project">
            <li>Project</li>
          </Link>
        </ul>
      
    </div>
  )
}

export default Header
