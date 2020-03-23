import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './navbar.styles.scss';

import logo from '../../assets/logo.png';
import crumpet from '../../assets/crumpet.png';
//TODO -> when click crumpet/logo go to top
class Navbar extends Component{
    
render() {
    return (
        <div className="navbar">
            <Link className="logo-container" to="/">
                <img className="logo" src={logo} alt="logo" onClick={() => {
                    window.scrollTo(0,0);
                }}></img>
            </Link>
            <div className="options">
                <Link className="option" to="/qrumpet">
                <img className="logo" src={crumpet} alt="crumpet" onClick={() => {
                    window.scrollTo(0,0);
                }}></img>
                </Link>
            </div>
        </div>
    )}
}

export default Navbar;