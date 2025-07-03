import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-gray">M</span>
        <span className="logo-green">E</span>
        <span className="logo-blue">N</span>
        <span className="logo-blue">T</span>
        <span className="logo-blue">O</span>
        <span className="logo-blue">R</span>
        <span className="logo-text">BRIDGE</span>
      </div>
      <nav className="nav">
        <ul>

         <Link to="About"><li>About</li></Link> 
         {/* <Link to="Signup"><li>Signup</li></Link> */}
         <Link to="Login"><li>Login/Signup</li></Link>
         <Link to="Mentor"><li>Mentors</li></Link>
          
          
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
