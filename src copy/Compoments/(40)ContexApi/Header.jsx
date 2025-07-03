import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <ul>
        <Link to="Home" >
            <li>Home</li>
        </Link>
        <Link to="Register" >
            <li>Register</li>
        </Link>
        <Link to="LOgin" >
            <li>LOgin</li>
        </Link>
        <Link to="Project" >
            <li>Project</li>
        </Link>
      </ul>
    </div>
  )
}
