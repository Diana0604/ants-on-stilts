import React, {Component} from 'react';
//components
import RotatingHeader from '../../components/rotating-header/rotating-header.component';
import List from '../../components/list/list.component';
import SideBySide from '../../components/sidebyside/sidebyside.component';
//style
import './qrumpetpage.styles.scss';
//assets
import qrumpets from './assets/qrumpets.png';
//constants
import {ATTEMPTSSIDEBYSIDE, GOAL_LIST, GET_THERE_LIST, RESEARCH_LIST} from './qrumpet.data';

//TODO -> make SideBySide accept react components as argument so I can send a list instead of the whole <p's> thing
class QrumpetPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            attemptSideBySideLeft: ATTEMPTSSIDEBYSIDE.elements[0],
            attemptSideBySideRight: ATTEMPTSSIDEBYSIDE.elements[1],
            attemptSideBySideTitle: ATTEMPTSSIDEBYSIDE.title,
            goalList: GOAL_LIST,
            getThereList: GET_THERE_LIST,
            researchList: RESEARCH_LIST,
        }
        console.log(this.state.attemptSideBySideRight);
    }

    render (){
     return (
        <div className="qrumpetpage">
            <RotatingHeader src={qrumpets} alt="qrumpet"></RotatingHeader>
            <div className="container">
                <SideBySide title={this.state.attemptSideBySideTitle}>
                {this.state.attemptSideBySideLeft.map(attempt => (
                    <p key={attempt.number}><b>{attempt.number}</b> {attempt.text}</p>
                ))}
                <img src={this.state.attemptSideBySideRight.src} alt={this.state.attemptSideBySideRight.alt}></img>
                </SideBySide>
                <List title={this.state.goalList.title}>
                    {this.state.goalList.list}
                </List>
                <List title={this.state.getThereList.title}>
                    {this.state.getThereList.list}
                </List>
                <List title={this.state.researchList.title}>
                    {this.state.researchList.list}
                </List>
            </div>
        </div>
     )}
}

export default QrumpetPage;