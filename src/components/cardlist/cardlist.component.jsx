import React from 'react';
//components
import Card from '../card/card.component';
//styles
import './cardlist.styles.scss';

const CardList = (props) => (
  <div className = "card-list">
    {
        props.elements.map(element => (
        <Card element={element} key={element.key} ></Card>
        ))
    }
  </div>  
);

export default CardList;