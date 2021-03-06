import React from 'react';

import './card.styles.scss';

const Card = (props) => (
    <div className="card-container">
        <img key={props.element.key} src={props.element.src} alt={props.element.alt} className="card-img"></img>
        <h2>{props.element.title}</h2>
        <p>{props.element.name}</p>
    </div>
);

export default Card;