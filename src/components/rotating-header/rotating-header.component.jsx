import React from 'react';
//styles
import './rotating-header.styles.scss'

const RotatingHeader = (props) => (
    <header className="rotating-header">
        <img src={props.src} className="header-image" alt="header-image"/>
    </header>
);

export default RotatingHeader;