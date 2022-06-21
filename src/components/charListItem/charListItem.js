import './charListItem.scss';
import React from "react";

const CharListItem = (props) => {
  const {name, img} = props; 
  return (
    <div className='char-list-item'>
      <img className='char-list-item-img' src={img} alt="character" />
      <div className="char-list-item-title">
        <p className="char-list-item-name">{name}</p>
      </div>
    </div>
  )
};

export default CharListItem;