import React from 'react';
//style
import './bigimage.styles.scss';

const BigImage = (props) => (
    <div className="bigImage">
        <img src={props.src} alt={props.alt}></img>
    </div>
);

export default BigImage;
