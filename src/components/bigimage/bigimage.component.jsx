import React from 'react';
//components
import Title from '../title/title.component';
//style
import './bigimage.styles.scss';

const BigImage = (props) => (
    <div className="bigImage">
        <Title title={props.title}></Title>
        <img src={props.src} alt={props.alt}></img>
    </div>
);

export default BigImage;
