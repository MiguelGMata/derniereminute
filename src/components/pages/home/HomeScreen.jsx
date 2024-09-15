import React from 'react';
import Header from '../../organisms/header/Header';
import CardOffert from '../../molecules/cardofert/CardOffert';
import './homeScreen.css';
import Separator from '../../atoms/separator/Separator';


const HomeScreen = () =>{
    return(
        <main className="homeScreen">
            <Header/>
            <Separator/>
            <h1 className="homeScreen-h1">Offres de vacances <span className="homeScreen-span">Dernière Minute</span> </h1>
            <h1  className="homeScreen-h1">Réservez vite</h1>
            <p  className="homeScreen-p">Des réductions exceptionnelles sur nos offres Vol + Hôtel, en exclusivité sur lastminute.com</p>
            <CardOffert/>
        </main>
    )
}

export default HomeScreen