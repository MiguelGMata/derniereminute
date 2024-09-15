import React, { useState } from 'react';
import { FaHome, FaPlane, FaUmbrellaBeach, FaMapMarkedAlt, FaTags, FaMapPin } from 'react-icons/fa';
import Image from '../../../assets/images/logo.png';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // Estado para rastrear el item activo

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item); // Actualiza el item activo
    setMenuOpen(false);  // Cierra el menú en mobile después de hacer clic
  };

  return (
    <nav className="navbar">
      <img src={Image} className="navbar-logo" alt="Logo"></img>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li 
            className={activeItem === 'Accueil' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Accueil')}
          >
            <FaHome /> <span>Accueil</span>
          </li>
          <li 
            className={activeItem === 'Séjours' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Séjours')}
          >
            <FaPlane /> <span>Séjours</span>
          </li>
          <li 
            className={activeItem === 'Clubs' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Clubs')}
          >
            <FaUmbrellaBeach /> <span>Clubs</span>
          </li>
          <li 
            className={activeItem === 'Circuits' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Circuits')}
          >
            <FaMapMarkedAlt /> <span>Circuits</span>
          </li>
          <li 
            className={activeItem === 'Bons Plans' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Bons Plans')}
          >
            <FaTags /> <span>Bons Plans</span>
          </li>
          <li 
            className={activeItem === 'Destinations' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Destinations')}
          >
            <FaMapPin /> <span>Destinations</span>
          </li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">{menuOpen ? '✕' : '☰'}</span>
      </div>
    </nav>
  );
};

export default Navbar;


