import React from 'react';
//styles
import './cardlist.styles.scss';

const CardList = (props) => (
  <div className = "cardlist">
    {
        props.elements.map(element => (
        <img key={element.key} src={element.src} alt={element.alt} className="card-img"></img>
        ))
    }
  </div>  
);

export default CardList;