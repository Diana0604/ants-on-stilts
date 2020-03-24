import React from 'react';
//components
import Title from '../title/title.component';

//styles
import './titled.styles.scss';

const Titled = ({title, ...props}) => (
    <div className="titled">
        <Title title={title}></Title>
        {props.children}
    </div>
)

export default Titled;