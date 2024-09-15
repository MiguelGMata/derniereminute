import React from 'react';
import Carousel from '../../molecules/slider/Carousel';
import './header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-image">
          <Carousel/>
        </div>
        <div className="header-content">
          <h1>Les offres de vacances en dernière minute, c'est ici</h1> 
          <div className="search-bar">
            <input type="text" placeholder="Rechercher..." />
            <button type="button">Rechercher</button>
          </div>
        </div>
      </header>

      <section className="agency-section">
        <h2>Votre agence de voyage en ligne</h2>
        <div className="cards-container">
          <div className="card">
            <img src="https://images.leclercvoyages.com/F12mBAKMlbxsPCm3Y3ukObF1A8AxQGiCNBgV5BpArjFyvW4mVeXUNIiA-kCsqhPFPqChDlwPy1ACk7JFIpAuqjnhY02u4i5g57ZRtf5eaFqXXF5iXHDZUhQBgHgQ0hRKmN-pIQybXCdn-t6yUH2X5-YZ66g-p61lxkvb8WIDHXo=?twic=v1" alt="Voyage 1" />
            <div className="card-content">
              <h3>Offres de vacances Dernière Minute</h3>
              <p>Économisez davantage avec ces offres exclusives à durée limitée</p>
            </div>
          </div>
          <div className="card">
            <img src="https://static.service-voyages.com/photos/vignettes/fram/20240830144606-fram-Rentree_fram_hpt_mobile_345x330.jpg" alt="Voyage 2" />
            <div className="card-content">
              <h3>Réservez maintenant pour l'été</h3>
              <p>Il n'est jamais trop tard pour trouver l'escapade parfaite</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;


   