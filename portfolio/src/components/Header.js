// import React, { useState } from 'react';
// import { Link } from ' react-router-dom';
import reactlogo from "../images/logo-react-icon.png";
import ring from "../images/bluering.png";

function Header() {
  return (
    <header>
      <div className="container">
        
        <h1>The Portfolio of Andrew Forbes created with Reactjs</h1>
        <div className="animation"><a href="https://react.dev/"><img  className="ring1" src={ring} alt="something" /><img  className="ring2" src={ring} alt="something" /><img  className="reactLogo" src={reactlogo} alt="something" /></a>
        </div>
      </div>
    </header>
  )
}

export default Header;