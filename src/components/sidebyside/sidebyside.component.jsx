import React from 'react';
//styles
import './sidebyside.component.scss';

const SideBySide = (props) => (
    <div class='sidebyside-containe'>
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