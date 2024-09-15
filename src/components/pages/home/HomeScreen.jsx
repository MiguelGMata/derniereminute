import React from 'react';
import Header from '../../organisms/header/Header';
import CardOffert from '../../molecules/cardofert/CardOffert';
import './homeScreen.css';


const HomeScreen = () =>{
    return(
        <main>
            <Header/>
            <CardOffert/>
        </main>
    )
}

export default HomeScreen