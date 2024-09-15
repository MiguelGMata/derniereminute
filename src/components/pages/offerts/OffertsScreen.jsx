import React from 'react';
import './OffertsScreen.css';
import CardOffert from '../../molecules/cardofert/CardOffert'; 

const OffertsScreen = () => {
  return (
    <>
      <main className="OffertScreen">
        <section className="OffertScreen-section">
          <h1 className="OffertScreen-heading">Nos Offres Exceptionnelles</h1>
          <p className="OffertScreen-description">
            Découvrez nos meilleures offres de vacances à prix réduits !
          </p>
          <CardOffert /> 
        </section>
      </main>
    </>
  );
}

export default OffertsScreen;
