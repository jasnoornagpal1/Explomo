import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
      <div className="container">
        
        <Link to='/login' onClick={props.handleLogout}>LOG OUT</Link>
        
        <span>WELCOME, {props.user.name}</span>
      </div>
      :
      <div className="container">
        <Link to='/login'>LOG IN</Link>
        
        <Link to='/signup'>SIGN UP</Link>
      </div>;
  
    return (
      <div>
        {nav}
      </div>
    );
  };
  
  export default NavBar;