import React from 'react';

import './custom-button.styles.scss';

const Button = ({color, handleClick, children}) => (
    <button className={color} onClick={handleClick}>
        {children}
    </button>
    )

export default Button;