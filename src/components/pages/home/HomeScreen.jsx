import React from 'react';
import Header from '../../organisms/header/Header';
import CardOffert from '../../molecules/cardofert/CardOffert';
import SeparatorA from '../../atoms/separator/SeparatorA';
import SeparatorB from '../../atoms/separator/SeparatorB';
import './homeScreen.css';
import CardDestinations from '../../molecules/destintioncard/CardDestinations';
import ClubsCard from '../../molecules/clubscard/ClubsCard';
import SeparatorC from '../../atoms/separator/SeparatorC';



const HomeScreen = () =>{
    return(
        <>
            <Header/>
            <main className="homeScreen">
                <SeparatorA/>
                    <section>
                        <h1 className="homeScreen-h1">Offres de vacances <span className="homeScreen-span">Dernière Minute</span> </h1>
                        <h1  className="homeScreen-h1">Réservez vite</h1>
                        <p  className="homeScreen-p">Des réductions exceptionnelles sur nos offres Vol + Hôtel, en exclusivité sur dernièreminute.vercel.app</p>
                    </section>
                <CardOffert/>
                <SeparatorB/>
                    <section>
                        <h1 className="homeScreen-h1"><span className="homeScreen-span">Les destinations</span> préférées de nos clients</h1>
                        <p  className="homeScreen-p">De super offres sur tous les lieux de villégiature populaires.</p>
                    </section>
                <CardDestinations/>
                <SeparatorC/>
                <section>
                        <h1 className="homeScreen-h1">Un monde de <span className="homeScreen-span">Clubs</span> </h1>
                        <p  className="homeScreen-p">Pour des vacances en toute détente, nous avons recensé le meilleur du club de vacances et de voyages.</p>
                 </section>
     
                <ClubsCard/>
            </main>
        </>
    )
}
export default HomeScreen