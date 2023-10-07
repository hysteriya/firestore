import React from 'react'
import "./navbar.css";

const navbar = () => {
  return (
  <nav>
    <a href="#" className='logo'>ricoz</a>
    
    <ul>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Courses</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
    </ul>
    </nav>
  );
}


export default navbar