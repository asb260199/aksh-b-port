import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();   //Prevent reloading

    //1. Store the Data in variable
    const storedData = localStorage.getItem('formData');
    //console.log(storedData);  //[{"name":"ab","email":"asb29@gmail.com","message":"Testing"},{},...]
    
    //2. Check if storedData is truthy & Parse into new array variable
    const data = storedData ? JSON.parse(storedData) : []; // Parse into JS Obj
    //console.log(data);  //[{name: 'ab', email: 'asb29@gmail.com', message: 'Testing'}]

    //3. Push the data at the end of an data array
    data.push(formData);  

    //4. Stores the array as a JSON string in a local storage in a formData key
    localStorage.setItem('formData', JSON.stringify(data));

    //5. Clear thr form inputs after the submission
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent!');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log(event.target);
    //console.log({ name, value });
    setFormData({ ...formData, [name]: value }); //previous obj + new one
    //console.log(formData);
  };

  return (
    <>
    <div className="contact-container">
      <div className="contact-icons">
        <Link to="https://www.instagram.com/stocks.insights/" target="_blank" rel="noreferrer">
          <img src="https://asb260199.github.io/ab-app/instagram.png" alt="Instagram" />
        </Link>
        <Link to="https://www.linkedin.com/in/akshay-bodke-480603144" target="_blank" rel="noreferrer">
          <img src="https://asb260199.github.io/ab-app/linkedin.png" alt="LinkedIn" />
        </Link>
        <Link to="mailto:asb260199@gmail.com" rel="noreferrer">
          <img src="https://asb260199.github.io/ab-app/gmail.png" alt="Gmail" />
        </Link>
        <Link to="https://github.com/asb260199" target="_blank" rel="noreferrer">
          <img src="https://asb260199.github.io/ab-app/github.png" alt="Github" />
        </Link>
        <Link to="tel:+917066241090">
          <img src="https://asb260199.github.io/ab-app/viber.png" alt="Phone" />
        </Link>
      </div>
      <div className="contact-form">
        <h2 className="h2-cont">Contact Me</h2>
        <form className="form-cont" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button className="subButton" type="submit">Send</button>
        </form>
      </div>
    </div>
    <footer>© Copyright by <Link to="https://www.linkedin.com/in/akshay-bodke-480603144" target="_blank" rel="noreferrer">Akshay Bodke</Link></footer>
    </>
  );
};