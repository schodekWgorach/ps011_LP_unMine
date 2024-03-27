
// Navbar.js

import React from 'react';
import '../scss/main.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li><a href="#home">O nas</a></li>
          <li><a href="#about">Lądowe</a></li>
          <li><a href="#services">Morskie</a></li>
          <li><a href="#contact">Zakres działania</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
