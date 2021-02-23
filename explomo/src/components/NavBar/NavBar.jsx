import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    
    let nav = props.user ?
    <div>
      <div to='/high-scores' className='NavBar-link'>HIGH SCORES</div>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <div to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</div>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <div to='/login' className='NavBar-link'>LOG IN</div>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <div to='/signup' className='NavBar-link'>SIGN UP</div>
    </div>;
  
    return (
      <div>
        {nav}
      </div>
    );
  };
  
  export default NavBar;