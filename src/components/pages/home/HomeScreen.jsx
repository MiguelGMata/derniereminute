import React from 'react';
import Header from '../../organisms/header/Header';
import CardOffert from '../../molecules/cardofert/CardOffert';
import SeparatorA from '../../atoms/separator/SeparatorA';
import SeparatorB from '../../atoms/separator/SeparatorB';
import './homeScreen.css';



const HomeScreen = () =>{
    return(
        <main className="homeScreen">
            <Header/>
            <SeparatorA/>
            <h1 className="homeScreen-h1">Offres de vacances <span className="homeScreen-span">Dernière Minute</span> </h1>
            <h1  className="homeScreen-h1">Réservez vite</h1>
            <p  className="homeScreen-p">Des réductions exceptionnelles sur nos offres Vol + Hôtel, en exclusivité sur lastminute.com</p>
            <CardOffert/>
            <SeparatorB/>
        </main>
    )
}

export default HomeScreen