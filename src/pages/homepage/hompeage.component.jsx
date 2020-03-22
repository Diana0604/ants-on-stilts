import React from 'react';
import logo from '../../logo.png';

import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <header className="hp-logo-header">
            <img src={logo} className="hp-logo" alt="logo" />
        </header>
    </div>
);

export default HomePage;