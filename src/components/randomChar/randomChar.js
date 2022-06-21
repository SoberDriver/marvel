import './randomChar.scss';
import React from "react";
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = (props) => {
  return (
    <div className="random-char">
      <div className="random-char-body">
        <img className="random-char-img" src={thor} alt="thor"/>
        <div className="random-char-info">
          <p className="random-char-name">THOR</p>
          <p className="random-char-description">
          As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, selfish imbecile, he's quite smart and compassionate...
          </p>
          <div className="random-char-buttons">
              <a href="" className="button button-main"><div className="inner">HOMEPAGE</div></a>
              <a href="" className="button button-secondary"><div className="inner">WIKI</div></a>
            </div>
        </div>
      </div>
      <div className="random-char-try">
        <div className="random-char-try-disclaimer">
          <p className="random-char-try-title">
            Random character for today!<br/>
            Do you want to get to know him better?
          </p>
          <p className="random-char-try-title">Or choose another one</p>
          <a href="" className="button button-main"><div className="inner">TRY IT</div></a>
        </div>
        <img className="random-char-try-img" src={mjolnir} alt="mjolnir"/>
      </div>
    </div>
  )
};

export default RandomChar;