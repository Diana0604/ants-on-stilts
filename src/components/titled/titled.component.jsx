import React from 'react';
//components
import Title from '../title/title.component';

//styles
import './titled.styles.scss';

const Titled = ({title, children}) => (
    <div className="titled">
        <Title title={title}></Title>
        {children}
    </div>
)

export default Titled;