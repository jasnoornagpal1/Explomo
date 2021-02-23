import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
      <div className="container">
        
        <div>LOG OUT</div>
        
        <span>WELCOME, </span>
      </div>
      :
      <div className="container">
        <div>LOG IN</div>
        
        
        <div>SIGN UP</div>
      </div>;
  
    return (
      <div>
        {nav}
      </div>
    );
  };
  
  export default NavBar;