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
          {hotels.map((country) => (
          country.destinations.map((destination) => (
            <HotelDetails key={destination.id} hotels={destination} />
          ))
          ))}
        </section>
      </main>
    </>
  );
}
export default StaysScreen;
