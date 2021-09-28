import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.scss";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <Link to='/' className='nav-item'>
          Jingyi's Portfolio
        </Link>
      </div>
      <div className='nav-right'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/about' className='nav-link'>
          About
        </Link>
        <Link to='/projects' className='nav-link'>
          Projects
        </Link>
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
