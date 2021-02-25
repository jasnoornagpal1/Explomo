import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

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

return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};
    


export default NavBar;