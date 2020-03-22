import React from 'react';
//components
import RotatingHeader from '../../components/rotating-header/rotating-header.component';
import CardList from '../../components/cardlist/cardlist.component';
//logo
import logo from './assets/logo.png';
//ants
import andy from './assets/Andy.png';
import diana from './assets/Diana.png';
import eva from './assets/Eva.png';
import lucy from './assets/Lucy.png';
import mischa from './assets/Mischa.png';
import paul from './assets/Paul.png';
import qiu from './assets/Qiu.png';
import crumpet from './assets/crumpet.png';
//manifesto
import manifesto from './assets/manifesto.png';
//styles
import './homepage.styles.scss';

//ants
const ants = [
    {
        key: 1,
        src: andy,
        name: "Andy Pandy",
        title: "Play Keeper"
    },
    {
        key: 2,
        src: diana,
        name: "Diana Vallverdu i Cabrera Bayes Bean Borras Casanovas de Luna Cabrera Baro de Dios Sampsons Cabrera Vayreda Colea Margenat Badia",
        title: "Logic Keeper"
    },
    {
        key: 3,
        src: eva,
        name: "Ha Lee (Eva)",
        title: "Keeper Keeper/Orange Keeper"
    },
    {
        key: 4,
        src: lucy,
        name: "Lucy",
        title: "Time Keeper"
    },
    {
        key: 5,
        src: mischa,
        name: "Mischa Jones",
        title: "Nut Keeper"
    },
    {
        key: 6,
        src: paul,
        name: "Paule H. Barns",
        title: "Kind Giant, Keeper of Tech"
    },
    {
        key: 7,
        src: qiu,
        name: "Super Qiu",
        title: "Thrust Keeper"
    },
    {
        key: 8,
        src: crumpet,
        name: "Qrrrrumpet",
        title: "The Qrumpet"
    }
]

const HomePage = () => (    
    <div className="homepage">
        <RotatingHeader src={logo} alt="logo"></RotatingHeader>
        <CardList elements={ants}></CardList>
        <img src= {manifesto}></img>
    </div>
);

export default HomePage;