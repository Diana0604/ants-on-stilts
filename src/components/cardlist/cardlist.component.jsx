import React from 'react';
//components
import Card from '../card/card.component';
//styles
import './cardlist.styles.scss';

const CardList = (props) => (
  <div className="card-list-wrapper">
    <h1 className="title">{props.title}</h1>
    <hr></hr>
    <div className = "card-list">
      {
          props.elements.map(element => (
          <Card element={element} key={element.key} ></Card>
          ))
      }
    </div>
  </div>  
);

export default CardList;