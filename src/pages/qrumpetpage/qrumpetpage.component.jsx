import React, {Component} from 'react';
//components
import Titled from '../../components/titled/titled.component';
import RotatingHeader from '../../components/rotating-header/rotating-header.component';
import List from '../../components/list/list.component';
import SideBySide from '../../components/sidebyside/sidebyside.component';
//style
import './qrumpetpage.styles.scss';
//assets
import qrumpets from '../../assets/qrumpets.png';
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
                <Titled title={this.state.attemptSideBySideTitle}>
                    <SideBySide>
                        {this.state.attemptSideBySideLeft.map(attempt => (
                            <p key={attempt.number}><b>{attempt.number}</b> {attempt.text}</p>
                        ))}
                        <img src={this.state.attemptSideBySideRight.src} alt={this.state.attemptSideBySideRight.alt}></img>
                    </SideBySide>
                </Titled>
                <Titled title={this.state.goalList.title}>
                    <List>
                        {this.state.goalList.list}
                    </List>
                </Titled>
                <Titled title={this.state.getThereList.title}>
                    <List>
                        {this.state.getThereList.list}
                    </List>
                </Titled>
                <Titled title={this.state.researchList.title}>
                    <List>
                        {this.state.researchList.list}
                    </List>
                </Titled>
                <Titled title="Our Results">
                    <div className="qrumpetshow-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PisAdRFnzFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
            </Titled>
            <Titled title="Wanna try it at home?">
            <div className="instructions">You just need to find 6 friends to follow this video tutorial!</div>
            <div className="qrumpetshow-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jx0W_llR4SI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
    </Titled>
        </div>
     )}
}

export default QrumpetPage;