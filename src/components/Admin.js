import React, { useState } from 'react';
import './admin.css';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  //Function to handle form submit for signing-in
  const handleSignIn = (event) => {
    event.preventDefault();
    //Check if username and password are correct
    if (username === 'akshay' && password === '1234') {
      //Set loggedIn flag to true and show data
      setLoggedIn(true);
      const formData = localStorage.getItem('formData');
      if (formData !== null) {
        setData(JSON.parse(formData));
      }
    } else {
      alert('Incorrect username or password');
    }
  };

  //Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    setData([]);
    setUsername('');
    setPassword('');
  };

  return (
    <>
    <div className="admin-container">
      {!loggedIn ? (
        //Show sign-in form if not logged in
        <form className='form-ad' onSubmit={handleSignIn}>
           <div className="logo-container">
            <Link to='/'><img src="https://asb260199.github.io/ab-app/logo.png" alt="Logo" /></Link>
          </div>
          <h2 className='header-ad'>Sign In</h2>
          <div>
            <label className="label-name" htmlFor="username">Username:</label>
            <input
              className='inp-id'
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label className="label-pass" htmlFor="password">Password:</label>
            <input
              className='inp-pass'
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="signBtn" type="submit">Sign In</button>
        </form>
      ) : (
        // Show data if logged in
        <>
          <h2>Data Submitted by Users</h2>
          {Array.isArray(data) && data.length === 0 ? (
            <p>No data found.</p>
          ) : (
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button className='logBtn' onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
    <footer>© Copyright by <Link to="https://www.linkedin.com/in/akshay-bodke-480603144" target="_blank" rel="noreferrer">Akshay Bodke</Link></footer>
    </>
  );
};