import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './navbar.styles.scss';


import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Crumpet} from '../../assets/crumpet.svg';
import crumpet from '../../assets/crumpet.png';
class Navbar extends Component{
    
render() {
    return (
        <div className="navbar">
            <Link className="logo-container" to="/">
                <Logo className="logo" onClick={() => {
                    window.scrollTo(0,0);
                }}></Logo>
            </Link>
            <div className="options">
                <Link className="option-container" to="/qrumpet">
                <Crumpet className="option" onClick = {() => {
                    window.scrollTo(0,0);
                }}></Crumpet>
                </Link>
            </div>
        </div>
    )}
}

export default Navbar;