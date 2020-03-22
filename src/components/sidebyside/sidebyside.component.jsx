import React from 'react';
//styles
import './sidebyside.component.scss';

const SideBySide = (props) => (
    <div className="sidebyside">
        <div className="col">
        {props.children[0]}
        </div>
        <div className="col">
        {props.children[1]}
        </div>
    </div>
);

export default SideBySide;

/*
const Label = props => <span>{props.children}</span>
const Tab = props => <div>{props.children}</div>
const Page = () => <Tab><Label>Foo</Label></Tab>
*/