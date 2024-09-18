import React from 'react';
import HeaderClubs from '../../organisms/header/HeaderClubs';
import ClubsCard from '../../molecules/clubscard/ClubsCard';
import './clubsScreen.css';



const ClubsScreen = () => {
  return (
    <>
    <HeaderClubs/>
      <main className="ClubsScreen">
        <section className="ClubsScreen-section">
          <h1 className="ClubsScreen-heading">Plongez dans l’univers de nos Clubs de vacances !</h1>
          <p className="ClubsScreen-description">
            Des séjours tout compris pour toute la famille, dans des lieux de rêve avec des activités pour tous les goûts.
          </p>
          <ClubsCard/>
        </section>
      </main>
    </>
  );
}
export default ClubsScreen;