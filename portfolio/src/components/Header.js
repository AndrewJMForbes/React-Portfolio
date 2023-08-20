// import React, { useState } from 'react';
// import { Link } from ' react-router-dom';
import reactlogo from "../images/logo-react-icon.png"

function Header() {
  return (
    <header>
      <div className="container">
        <h1>The Portfolio of Andrew Forbes created with Reactjs</h1><img className="reactLogo" src={reactlogo} alt="something" />
        
      </div>
    </header>
  )
}

export default Header;