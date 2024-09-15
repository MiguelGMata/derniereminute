import React, { useState } from 'react';
import { FaHome, FaPlane, FaUmbrellaBeach, FaTags, FaMapPin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
      <Link to={"/"} className='navbar-link'>
        <img src={Image} className="navbar-logo" alt="Logo"></img>
      </Link>

      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul>

          <li 
            className={activeItem === 'Accueil' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Accueil')}
          >
            <Link to={"/"} className='navbar-link'>
              <FaHome /> <span>Accueil</span>
            </Link>
          </li>
          <li 
            className={activeItem === 'Séjours' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Séjours')}
          >
            <Link to={"/sejours"} className='navbar-link'>
              <FaPlane /> <span>Séjours</span>
            </Link>
          </li>
          <li 
            className={activeItem === 'Clubs' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Clubs')}
          >
            <Link to={"/clubs"} className='navbar-link'>
              <FaUmbrellaBeach /> <span>Clubs</span>
            </Link>
          </li>
          <li 
            className={activeItem === 'Bons Plans' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Bons Plans')}
          >
            <Link to={"/bons-plans"} className='navbar-link'>
              <FaTags /> <span>Bons Plans</span>
            </Link>
          </li>
          <li 
            className={activeItem === 'Destinations' ? 'active' : ''} 
            onClick={() => handleMenuItemClick('Destinations')}
          >
            <Link to={"/destinations"} className='navbar-link'>
              <FaMapPin /> <span>Destinations</span>
            </Link>
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


