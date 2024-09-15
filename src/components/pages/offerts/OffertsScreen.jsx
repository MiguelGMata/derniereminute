import React from 'react';
import CardOffert from '../../molecules/cardofert/CardOffert'; 
import HeaderMultiple from '../../organisms/header/HeaderMultiple';
import './offertsScreen.css';


const OffertsScreen = () => {
  return (
    <>
    <HeaderMultiple/>
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
