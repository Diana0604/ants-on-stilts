import React from 'react';
//components
import Title from '../../components/title/title.component';
import RotatingHeader from '../../components/rotating-header/rotating-header.component';
//style
import './qrumpetpage.styles.scss';
//assets
import qrumpets from './assets/qrumpets.png';
import allready from './assets/allready.png';
import SideBySide from '../../components/sidebyside/sidebyside.component';
//attempt list
const attemptList = [
    {
        number: "Attempt 146,003.",
        text: "Conditions fine. Sufficient supplies. All in good spirits. We persevere in expectation of success. Any day now."
    },{
        number: "Attempt 146,004.",
        text: "Conditions fine. Sufficient supplies. All in good spirits. We persevere in expectation of success. Any day now."
    },{
        number: "Attempt 146,007.",
        text: "Conditions fine. Sufficient supplies. Unusual song choice. We persevere in expectation of success. Any day now."
    },{
        number: "Attempt 146,021.",
        text: "Conditions fine. Sufficient supplies, though a little late. All in good spirits. Any day now."
    },{
        number: "Attempt 146,325.",
        text: "Any day now. We persevere. Cos this is thriller. Thriller night."
    },{
        number: "Attempt 147,000.",
        text: "All in spirits"
    },{
        number: "Attempt 147,001.",
        text: "Any day now. Good spirits."
    },{
        number: "Attempt 198,023.",
        text: "We regret nothing."
    }
];

const QrumpetPage = () => (
    <div className="qrumpetpage">
        <RotatingHeader src={qrumpets} alt="qrumpet"></RotatingHeader>
        <div className="container">
            <Title title="The Qrumpet Show"></Title>
            <SideBySide>
            {attemptList.map(attempt => (
                <p key={attempt.number}><b>{attempt.number}</b> {attempt.text}</p>
            ))}
            <img src={allready} alt="allready"></img>
            </SideBySide>
            <Title title="Our Goal"></Title>
            <ul>
                <li>Send The Crumpet Through The Wall</li>
            </ul>
            <Title title="How To Get There!"></Title>
            <ul>
                <li>Perseverence</li>
                <li>Wholesomeness</li>
                <li>Faith in the process</li>
            </ul>
            <Title title="Our Research"></Title>
            <ul>
                <li>Quantum Tunneling</li>
            </ul>
        </div>
    </div>
)

export default QrumpetPage;