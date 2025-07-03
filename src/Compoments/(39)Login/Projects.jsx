import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Project = () => {
  return (
    <div>
      <header id='headerrouting' >
      <ul>
        <Link to="KampusKash">
          <li>KampusKash</li>
        </Link>
        <Link to="Worldtour" >
          <li>Worldtour</li>
        </Link>
      </ul>
      </header>
      <div><Outlet></Outlet></div>
      
    </div>
  )
}

export default Project;
