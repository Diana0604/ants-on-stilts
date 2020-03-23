import React from 'react';
//components
import Card from '../card/card.component';
import Title from '../title/title.component'
//styles
import './cardlist.styles.scss';

const CardList = (props) => (
  <div className="card-list-wrapper">
    <Title title={props.title}></Title>
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