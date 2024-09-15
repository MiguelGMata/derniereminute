import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Dernière Minute</h2>
        </div>
        <div className="footer-links">
          <div className="footer-column">
          <h3>Contactez-nous</h3>
            <ul>
              <li><a href="#about"><FaMapMarkerAlt/>56 rue Sadi Carno, Paris 75020</a></li>
              <li><a href="#careers"><FaEnvelope /> contact@voyagesagence.com</a></li>
              <li><a href="#terms"><FaPhoneAlt /> +33 1 23 45 67 89</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Aide</h3>
            <ul>
              <li><a href="#support">Service client</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contactez-nous</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Destinations populaires</h3>
            <ul>
              <li><a href="#paris">Majorque</a></li>
              <li><a href="#london">Santorini</a></li>
              <li><a href="#bali">Ibiza</a></li>
              <li><a href="#ny">Puerto Rico</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Dernière minute. Tous droits réservés.</p>
        <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;