import React from 'react';
//styles
import './title.styles.scss';

const Title = (props) => (
    <div className="title">
        <h1>{props.title}</h1>
        <hr></hr>
    </div>
);

export default Title;