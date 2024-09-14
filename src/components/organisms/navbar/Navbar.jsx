import React, { useState } from 'react';
import { FaHome, FaPlane, FaUmbrellaBeach, FaMapMarkedAlt, FaTags, FaMapPin } from 'react-icons/fa';
import Image from '../../../assets/images/logo.png'
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <img src={Image} className="navbar-logo"></img>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><FaHome /> <span>Accueil</span></li>
          <li><FaPlane /> <span>Séjours</span></li>
          <li><FaUmbrellaBeach /> <span>Clubs</span></li>
          <li><FaMapMarkedAlt /> <span>Circuits</span></li>
          <li><FaTags /> <span>Bons Plans</span></li>
          <li><FaMapPin /> <span>Destinations</span></li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {/* Cambiar entre el icono de hamburguesa y la X */}
        <span className="menu-icon">{menuOpen ? '✕' : '☰'}</span>
      </div>
    </nav>
  );
};

export default Navbar;

