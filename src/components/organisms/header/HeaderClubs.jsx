import React from 'react';
import './headerClubs.css';

const HeaderClubs = () => {
  return (
    <header className="header-clubs">
      <video className="header-clubs-video" autoPlay loop muted playsInline>
        <source src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/clubs.mp4?updatedAt=1726432976848" type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
      <div className="header-clubs-overlay"></div>
      <div className="header-clubs-content">
        <h1>Découvrez Nos Clubs</h1>
        <p>Des expériences uniques, des destinations de rêve et des moments inoubliables.</p>
      </div>
    </header>
  );
};

export default HeaderClubs;
