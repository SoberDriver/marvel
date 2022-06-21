import './comicsList.scss';
import React from "react";
import ComicsListItem from '../comicsListItem/comicsListItem';
import xMen from '../../resources/img/x-men.png';
import xMenUV from '../../resources/img/UW.png';

const ComicsList = (props) => {
  const data = [
    {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:'9.99$', img:xMenUV, id:1 },
    {name:'X-Men: Days of Future Past', price:'', img:xMen, id:2 },
    {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:'9.99$', img:xMenUV, id:3 },
    {name:'X-Men: Days of Future Past', price:'9.99$', img:xMen, id:4 },
    {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:'9.99$', img:xMenUV, id:5 },
    {name:'X-Men: Days of Future Past', price:'', img:xMen, id:6 },
    {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:'9.99$', img:xMenUV, id:7 },
    {name:'X-Men: Days of Future Past', price:'9.99$', img:xMen, id:8 },
    // {name:'ABYSS', img:abyss, id:9 },
  ];
  const comicsList = data.map(item => {
    return (<ComicsListItem name={item.name} price={item.price} img={item.img} key={item.id}/>)
  });
  return (
    <>
      <div className="comics-list-wrapper">
      {comicsList}
      </div>
      <a href="" className="button button-main button-long"><div className="inner">LOAD MORE</div></a>
    </>
  )
};

export default ComicsList;