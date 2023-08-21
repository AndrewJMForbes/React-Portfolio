// import React, { useState } from 'react';
// import { Link } from ' react-router-dom';
import reactlogo from "../images/logo-react-icon.png"

function Header() {
  return (
    <header>
      <div className="container">
        <h1>The Portfolio of Andrew Forbes created with Reactjs<a href="https://react.dev/"><img  className="reactLogo" src={reactlogo} alt="something" /></a></h1>
        
      </div>
    </header>
  )
}

export default Header;