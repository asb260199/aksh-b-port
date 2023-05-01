import React from 'react';
import './abt.css';
import { Link } from 'react-router-dom';

export default function Abt() {

  return (
    <>
    <div className="abt">
      <h2>About Me</h2>
      <p>Hi, I'm Akshay Sudhakar Bodke, a Software Development Engineer and Trader based in Nashik, India. I enjoy building user interfaces and creating seamless user experiences. In my free time, I like to learn new technologies and trade in the stock market. Below is some of my work: </p>
      <div className="work">
        <div className="work-item">
          <Link to="https://asb260199.github.io/textutilsapp/" target='_blank' rel="noreferrer"><img src="https://asb260199.github.io/ab-app/textutils.png" alt="Project 1"/></Link>
          <h3><Link to="https://asb260199.github.io/textutilsapp/" target='_blank' rel="noreferrer">Text Utilities</Link></h3>
          <p>TextUtils is a word counter and a character counting utility which can be used to manipulate your text</p>
        </div>
        <div className="work-item">
          <Link to="https://asb260199.github.io/maptyapp/" target='_blank' rel="noreferrer"><img src="https://asb260199.github.io/ab-app/mapty.png" alt="Project 2"/></Link>
          <h3><Link to="https://asb260199.github.io/maptyapp/" target='_blank' rel="noreferrer">Mapty</Link></h3>
          <p>Mapty is a application where you can Map your workouts with location pointer (In progress) </p>
        </div>
        <div className="work-item">
          <Link to="https://asb260199.github.io/svelte-mortgage-calc/" target='_blank' rel="noreferrer"><img src="https://asb260199.github.io/ab-app/mc.png" alt="Project 3"/></Link>
          <h3><Link to="https://asb260199.github.io/svelte-mortgage-calc/" target='_blank' rel="noreferrer">Mortgage Calculator</Link></h3>
          <p>A Mortgage Calc is a tool that estimate your monthly mortgage payments</p>
        </div>
      </div>
    </div>
    <footer>© Copyright by <Link to="https://www.linkedin.com/in/akshay-bodke-480603144" target="_blank" rel="noreferrer">Akshay Bodke</Link></footer>
    </>
  );
};