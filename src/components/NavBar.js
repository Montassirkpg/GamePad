// src/components/Navbar.js

import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li><a href="#Personnalisation">Personnalisation</a></li>
        <li><a href="#PSVITA-OLED">PSVITA-OLED</a></li>
        <li><a href="#EDITIONS LIMITEES">EDITIONS LIMITEES</a></li>
        <li><a href="#accesoires">accesoires</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
