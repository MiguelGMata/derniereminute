import React from 'react';
import HeaderStays from '../../organisms/header/HeaderStays';
import './staysScreen.css';

const StaysScreen = () => {
  return (
    <>
    <HeaderStays/>
      <main className="StaysScreen">
        <section className="StaysScreen-section">
          <h1 className="StaysScreen-heading">Découvrez nos Séjours à des prix imbattables.</h1>
          <p className="StaysScreen-description">
            Préparez-vous à vivre des vacances inoubliables dans les plus belles destinations du monde !
          </p>
        </section>
      </main>
    </>
  );
}
export default StaysScreen;