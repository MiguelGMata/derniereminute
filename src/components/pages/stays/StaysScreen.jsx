import React from 'react';
import HeaderStays from '../../organisms/header/HeaderStays';
import HotelDetails from '../../molecules/hotelCard/HotelDeatils';
import './staysScreen.css';

const StaysScreen = () => {
  return (
    <>
    <HeaderStays/>
      <main className="StaysScreen">
        <section className="StaysScreen-section">
          <HotelDetails />
        </section>
      </main>
    </>
  );
}
export default StaysScreen;
