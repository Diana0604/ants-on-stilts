import React from 'react';
//components
import RotatingHeader from '../../components/rotating-header/rotating-header.component';
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
        src: andy
    },
    {
        key: 2,
        src: diana
    },
    {
        key: 3,
        src: eva
    },
    {
        key: 4,
        src: lucy
    },
    {
        key: 5,
        src: mischa
    },
    {
        key: 6,
        src: paul
    },
    {
        key: 7,
        src: qiu
    }
]

const HomePage = () => (    
    <div className="homepage">
        <RotatingHeader src={logo}></RotatingHeader>
        <header className="hp-logo-header">
            <img src={logo} className="hp-logo" alt="logo" />
        </header>
        <div className="ants">
            {
            ants.map(ant => (
                <img key={ant.key} src={ant.src} className="ant-picture"></img>
            ))
            }
        </div>

    </div>
);

export default HomePage;