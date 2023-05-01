import React,  { useState }  from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Home() {
  const [home, setHome] = useState(false);
  const handleHome = () => {
    setHome(true);
  };
  
  return (
    <>
    <div className={`header-content ${home ? 'home-hide' : ''}`}>
      <div className="h1"> Hi, I am</div>
      <div className="h2">Akshay Sudhakar Bodke</div>
      <div className="h3">Software Development Engineer & a Trader</div>
      <div className="btns">
          <Link to="https://asb260199.github.io/ab-app/abr.pdf" target="_blank"><button className="btn">Download CV</button></Link>
          <Link to="/Contact"><button className="btn" onClick={function(event){handleHome()}}>Contact Me</button></Link>
      </div>
    </div>
    <footer>© Copyright by <Link to="https://www.linkedin.com/in/akshay-bodke-480603144" target="_blank" rel="noreferrer">Akshay Bodke</Link></footer>
    </>
  )
}
