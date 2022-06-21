import './comicsListItem.scss';
import React from "react";

const ComicsListItem = (props) => {
  const { name, img, price } = props;
  const noPrice = 'NOT AVAILABLE';
  return (
    <div className='comics-list-item'>
      <img className='comics-list-item-img' src={img} alt="comics" />
      <p className='comics-list-item-name'>{name}</p>
      <p className='comics-list-item-price'>{!!price ? price : noPrice}</p>
    </div>
  )
};

export default ComicsListItem;