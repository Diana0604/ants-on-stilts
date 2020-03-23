import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

import logo from '../../assets/logo.png';
import crumpet from '../../assets/crumpet.png';
//TODO -> when click crumpet/logo go to top
const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <div className="options">
            <Link className="option" to="/qrumpet">
            <img className="logo" src={crumpet} alt="crumpet"></img>
            </Link>
        </div>
    </div>
)

export default Header;