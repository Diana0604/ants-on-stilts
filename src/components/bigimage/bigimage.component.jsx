import React from 'react';

import './bigimage.styles.scss';

const BigImage = (props) => (
    <div className="bigImage">
        <h1>{props.title}</h1>
        <hr></hr>
        <img src={props.src} alt={props.alt}></img>
    </div>
);

export default BigImage;
