import React, {Component} from 'react';
//other dev components
import {withRouter} from 'react-router-dom';
//my components
import RotatingHeader from '../../components/rotating-header/rotating-header.component';
import CardList from '../../components/cardlist/cardlist.component';
import BigImage from '../../components/bigimage/bigimage.component';
import Titled from '../../components/titled/titled.component';
//logo
import logo from '../../assets/logo.svg'
//ants
import crumpet from './assets/crumpet.png';
//manifesto
import manifesto from './assets/manifesto.png';
//styles
import './homepage.styles.scss';
//constants
import ANTS from './homepage.data';

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            ants: ANTS
        }
    }

    componentWillUpdate(){
    }
    //TODO -> titles ind 'db'
    //TODO linkcrumpet to component

    render () { return (    
    <div className="homepage">
        <RotatingHeader src={logo} alt="logo"></RotatingHeader>
        <Titled title="Who We Are">
            <CardList elements={this.state.ants}></CardList>
        </Titled>
        <Titled title="Our Manifesto">
            <BigImage src={manifesto} alt="manifesto"></BigImage>
        </Titled>
        <Titled title="Check Out Our Projects!">
            <div className="linkcrumpet">
                <p><img src={crumpet} alt="qrumpet"></img></p>
                <p><button onClick={() => {
                    this.props.history.push('/qrumpet');
                    window.scrollTo(0, 0);
                }
                }>Qrumpet Show</button></p>
            </div>
        </Titled>
    </div>
    );
    }
}

export default withRouter(HomePage);