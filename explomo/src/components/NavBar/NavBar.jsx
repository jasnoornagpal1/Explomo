import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <header className="App-header">Explomo </header>
       <li className="nav-item active">
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
       </li>
       &nbsp;&nbsp;|&nbsp;&nbsp;
       <li className="nav-item active">
        <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
       </li>
       <form className="search">
            <input
              className="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="search"
              type="submit"
            >
              Search
            </button>
       </form>
    </div>
    
  );
};

export default NavBar;