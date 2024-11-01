import React from 'react';
import CardDestination from '../../molecules/destintioncard/CardDestinations'; 
import HeaderMultiple from '../../organisms/header/HeaderMultiple';
import Search from '../../molecules/search/Search';
import './destinationsScreen.css';

const DestinationsScreen = () => {
  return (
    <>
    <HeaderMultiple/>
      <main className="DestinationScreen">

        <section className="DestinationScreen-section">
          <h1 className="DestinationScreen-heading">Nos Destinations Inoubliables</h1>
          <p className="DestinationScreen-description">
            Découvrez nos meilleures destinations à prix réduits ! !
          </p>
          <CardDestination /> 
          <Search/>
        </section>
      </main>
    </>
  );
}
export default DestinationsScreen;