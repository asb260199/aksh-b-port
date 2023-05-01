import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [home, setHome] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  const handleHome = () => {
    setHome(true);
  };

  return (
    <>
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">
          <img src="logo.png" alt="Logo" onClick={function(event){handleHome()}} />
        </Link>
      </div>
      <div className="nav-hamburger" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className={`nav-links ${showMenu ? 'show-menu' : ''}`}>
      <div className='cross'><img src="close.png" alt="cross" onClick={function(event){handleClick();handleHome()}} /></div>
        <ul>
          <li>
            <Link to="/" onClick={function(event){handleClick();handleHome()}}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Abt" onClick={function(event){handleClick();handleHome()}}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={function(event){handleClick();handleHome()}}>
              Contact Me
            </Link>
          </li>
          <li>
            <Link to="/Admin" onClick={function(event){handleClick();handleHome()}}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className={`header-content ${home ? 'home-hide' : ''}`}>
      <div className="h1"> Hi, I am</div>
      <div className="h2">Akshay Sudhakar Bodke</div>
      <div className="h3">Software Development Engineer & a Trader</div>
      <div className="btns">
          <Link to="https://asb260199.github.io/ab-app/abr.pdf" target="_blank"><button className="btn">Download CV</button></Link>
          <Link to="/Contact"><button className="btn" onClick={function(event){handleHome()}}>Contact Me</button></Link>
      </div>
    </div>
    </>
  );
};
