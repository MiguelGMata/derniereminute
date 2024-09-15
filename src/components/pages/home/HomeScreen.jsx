import React from 'react';
import Header from '../../organisms/header/Header';
import CardOffert from '../../molecules/cardofert/CardOffert';
import SeparatorA from '../../atoms/separator/SeparatorA';
import SeparatorB from '../../atoms/separator/SeparatorB';
import './homeScreen.css';
import CardDestinations from '../../molecules/destintioncard/CardDestinations';



const HomeScreen = () =>{
    return(
        <main className="homeScreen">
            <Header/>
            <SeparatorA/>
            <h1 className="homeScreen-h1">Offres de vacances <span className="homeScreen-span">Dernière Minute</span> </h1>
            <h1  className="homeScreen-h1">Réservez vite</h1>
            <p  className="homeScreen-p">Des réductions exceptionnelles sur nos offres Vol + Hôtel, en exclusivité sur dernièreminute.vercel.app</p>
            <CardOffert/>
            <SeparatorB/>
            <h1 className="homeScreen-h1"><span className="homeScreen-span">Les destinations</span> préférées de nos clients</h1>
            <p  className="homeScreen-p">De super offres sur tous les lieux de villégiature populaires.</p>
            <CardDestinations/>
        </main>
    )
}

export default HomeScreen