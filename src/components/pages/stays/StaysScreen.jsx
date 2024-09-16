import React from 'react';
import HeaderStays from '../../organisms/header/HeaderStays';

import './staysScreen.css';
import HotelDetails from '../../molecules/hotelCard/HotelDeatils';

const StaysScreen = ({hotels} ) => {
  return (
    <>
    <HeaderStays/>
      <main className="StaysScreen">
        <section className="StaysScreen-section">
          <HotelDetails  hotels={hotels} />
        </section>
      </main>
    </>
  );
}
export default StaysScreen;

/*         
          <h1 className="StaysScreen-heading">Découvrez nos Séjours à des prix imbattables.</h1>
          <p className="StaysScreen-description">
            Préparez-vous à vivre des vacances inoubliables dans les plus belles destinations du monde !
          </p>
 */