import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Home() {
  return (
    <>
    <div className="header-content">
      <div className="h1"> Hi, I am</div>
      <div className="h2">Akshay Sudhakar Bodke</div>
      <div className="h3">Software Development Engineer & a Trader</div>
      <div className="btns">
          <Link to="/abr.pdf" target="_blank"><button className="btn">Download CV</button></Link>
          <Link to="/Contact"><button className="btn">Contact Me</button></Link>
      </div>
    </div>
    <footer>© Copyright by <Link to="https://www.linkedin.com/in/akshay-bodke-480603144" target="_blank" rel="noreferrer">Akshay Bodke</Link></footer>
    </>
  )
}
