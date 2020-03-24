import React from 'react';

import './custom-button.styles.scss';

const Button = ({color, handleClick, children, ...props}) => (
    <button className={color} onClick={handleClick} {...props}>
        {children}
    </button>
    )

export default Button;