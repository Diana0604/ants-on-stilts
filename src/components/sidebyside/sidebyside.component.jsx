import React from 'react';
//my components
import Title from '../../components/title/title.component';
//styles
import './sidebyside.component.scss';

const SideBySide = (props) => (
    <div>
        <Title title={props.title}></Title>
        <div className="sidebyside">
            <div className="col">
                {props.children[0]}
            </div>
            <div className="col">
                {props.children[1]}
            </div>
        </div>
    </div>
);

export default SideBySide;