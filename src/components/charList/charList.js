import './charList.scss';
import React from "react";
import abyss from '../../resources/img/abyss.jpg';
import CharListItem from '../charListItem/charListItem';

const CharList = (props) => {
  const data = [
    {name:'ABYSS', img:abyss, id:1 },
    {name:'ABYSS', img:abyss, id:2 },
    {name:'ABYSS', img:abyss, id:3 },
    {name:'ABYSS', img:abyss, id:4 },
    {name:'ABYSS', img:abyss, id:5 },
    {name:'ABYSS', img:abyss, id:6 },
    {name:'ABYSS', img:abyss, id:7 },
    {name:'ABYSS', img:abyss, id:8 },
    // {name:'ABYSS', img:abyss, id:9 },
  ];
  const charList = data.map(item => {
    return (<CharListItem name={item.name} img={item.img} key={item.id} ></CharListItem>)
  });
  return (
    <div className='char-list'>
      <div className="char-list-wrapper">
        {charList}
      </div>
      <a href="" className="button button-main button-long"><div className="inner">LOAD MORE</div></a>
    </div>
  )
};

export default CharList;