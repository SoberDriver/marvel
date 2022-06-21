import './charInfo.scss';
import React from "react";
import Skeleton from '../skeleton/skeleton';
import thor from '../../resources/img/thor.jpeg';

const CharInfo = (props) => {
  return (
    <div className='char-info'>
      {/* <Skeleton/> */}
      <div className="char-info-header">
        <img className="char-info-img" src={thor} alt="thor"/>
        <div className="char-info-rigth-side">
          <p className="char-info-name">THOR</p>
          <div className="char-info-buttons">
          <a href="" className="button button-main"><div className="inner">HOMEPAGE</div></a>
          <a href="" className="button button-secondary"><div className="inner">WIKI</div></a>
          </div>
        </div>
      </div>
      <div className="char-info-description">
      In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
      </div>
      <div className="char-info-comics">
        <h3>Comics:</h3>
        <ul className="char-info-comics-list">
          <li className="char-info-comics-item">
              All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info-comics-item">
              Alpha Flight (1983) #50
          </li>
          <li className="char-info-comics-item">
              Amazing Spider-Man (1999) #503
          </li>
          <li className="char-info-comics-item">
              Amazing Spider-Man (1999) #504
          </li>
          <li className="char-info-comics-item">
              AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
          </li>
          <li className="char-info-comics-item">
              Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
          </li>
          <li className="char-info-comics-item">
              Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
          </li>
          <li className="char-info-comics-item">
              Vengeance (2011) #4
          </li>
          <li className="char-info-comics-item">
              Avengers (1963) #1
          </li>
          <li className="char-info-comics-item">
              Avengers (1996) #1
          </li>
        </ul>
      </div>
    </div>
  )
};

export default CharInfo;