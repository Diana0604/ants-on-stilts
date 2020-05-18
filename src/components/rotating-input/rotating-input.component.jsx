import React from 'react';
//styles
import './rotating-input.styles.scss'

const RotatingHeader = ({handleClick, ...props}) => (
    <header className="rotating-header">
        <input type="password" alt={props.alt}/>
        <hr></hr>
        <button className="diana" onClick={handleClick} >Save Diana!</button>
    </header>
);

export default RotatingHeader;