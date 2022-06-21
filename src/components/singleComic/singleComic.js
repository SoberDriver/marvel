import './singleComic.scss';
import React from "react";
import xMen from '../../resources/img/x-men.png';

const SingleComic = (props) => {
  const pages = 144;
  return (
    <div className='single-comic'>
      <img className='single-comic-img' src={xMen} alt="comic" />
      <div className="single-comic-info">
        <h3 className="single-comic-title">X-Men: Days of Future Past</h3>
        <p className="single-comic-description">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
        <p className="single-comic-pages">{pages} pages</p>
        <p className="single-comic-language">Language: en-us</p>
        <p className="single-comic-price">9.99$</p>
      </div>
      <div className='single-comic-back'>
        <a href="">Back to all</a>
      </div>
    </div>
  )
};

export default SingleComic;