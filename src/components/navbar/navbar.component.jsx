import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './navbar.styles.scss';


import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Crumpet} from '../../assets/crumpet.svg';

class Navbar extends Component{

    constructor(props){
        super(props)

        this.state = {
            page: "homepage"
        }
    }

    handleClickLogo = () => {
        this.props.history.replace('/');
        window.scrollTo(0,0);
    }
    handleClickCrumpet = () => {
        this.props.history.replace('/qrumpet');
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="navbar">
                <Logo className="logo" onClick={this.handleClickLogo}></Logo>
                <div className="options">
                    <Crumpet className="option" onClick = {this.handleClickCrumpet}></Crumpet>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);