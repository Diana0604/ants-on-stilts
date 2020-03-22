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
/*
const Label = props => <span>{props.children}</span>
const Button = props => {
    const Inner = props.inner; // Note: variable name _must_ start with a capital letter 
    return <button><Inner>Foo</Inner></button>
}
const Page = () => <Button inner={Label}/>
*/