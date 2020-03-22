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
//styles
import './homepage.styles.scss'

//ants
const ants = [
    {
        key: 1,
        src: andy,
        alt: "andy"
    },
    {
        key: 2,
        src: diana,
        alt: "diana"
    },
    {
        key: 3,
        src: eva,
        alt: "eva"
    },
    {
        key: 4,
        src: lucy,
        alt: "lucy"
    },
    {
        key: 5,
        src: mischa,
        alt: "mischa"
    },
    {
        key: 6,
        src: paul,
        alt: "paul"
    },
    {
        key: 7,
        src: qiu,
        alt: "qiu"
    }
]

const HomePage = () => (    
    <div className="homepage">
        <RotatingHeader src={logo} alt="logo"></RotatingHeader>
        <CardList elements={ants}></CardList>
    </div>
);

export default HomePage;