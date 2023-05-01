import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Abt from './components/Abt';
import Home from './components/Home';
import Contact from './components/Contact';
import Admin from './components/Admin';

function App() {
  return (
    <>
    <Router>
			  <div>
				<Nav />
				<Routes >
          <Route path="/" Component={Home} />
          <Route path="/Abt" Component={Abt} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Admin" Component={Admin} />
				</Routes>
			  </div>
		</Router>
    </>
  );
}

export default App;
