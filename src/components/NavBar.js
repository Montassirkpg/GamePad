import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RETROMETROID</div>
      <ul className="nav-links">
        <li>Personnalisation</li>
        <li>PSVita - OLED</li>
        <li>Éditions Limitées</li>
        <li>Accessoires</li>
        <li>Fonds d'Écran</li>
      </ul>
      <div className="cart-info">
        <span>Livraison gratuite</span>
        <span>À partir de 149€</span>
      </div>
    </nav>
  );
}

export default Navbar;
