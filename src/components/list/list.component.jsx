import React from 'react';
//style
import './list.styles.scss';

const List = (props) => (
    <div className="list">
        <ul>
            {props.children.map(item => (
                <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
)

export default List;