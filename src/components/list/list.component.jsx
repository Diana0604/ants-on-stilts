import React from 'react';
//my comonents
import Title from '../../components/title/title.component';
//style
import './list.styles.scss';

const List = (props) => (
    <div className="list">
        <Title title={props.title}></Title>
        <ul>
            {props.children.map(item => (
                <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
)

export default List;