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
                        <p  className="homeScreen-p">Pour des vacances en toute détente, nous avons recensé le meilleur du club de vacances et de voyages. 
                            Ce sont les meilleures solutions pour profiter de beaux séjours en soleil tout en étant installé dans des établissements confortables convenant à tous les membres de votre tribu. 
                            A vous de choisir votre vision du voyage, selon vos envies du moment. Pour des moments de fun et de convivialité, optez pour Club Santa Catalina. Envie de sports et de moments en famille dans des hôtels premium ? Direction Les Regalia Hôtel & Club. Les voyageurs en quête d’émotions et d’expériences uniques opteront quant à eux pour Margarita Tropical. <br/>A chacun son club !</p>
                    </section>
     
                <ClubsCard/>
            </main>
        </>
    )
}
export default HomeScreen