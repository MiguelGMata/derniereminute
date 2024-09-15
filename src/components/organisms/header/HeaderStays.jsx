import React from 'react';
import './headerStays.css';

const HeaderStays = () => {
  return (
    <header className="header-stays">
      <video className="header-video" autoPlay loop muted playsInline>
        <source src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/sejour.mp4?updatedAt=1726432051961" type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
      <div className="header-stays-content">
        <h1>Séjours Inoubliables</h1>
        <p>Découvrez des séjours adaptés à tous les goûts et à tous les budgets.</p>
      </div>
    </header>
  );
};

export default HeaderStays;

