import './appBaner.scss';
import React from "react";
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const AppBanner = (props) => {
  return (
    <div className="app-banner">
      <img className='avengers' src={avengers} alt="avengers" />
      <h2>New comics every week!<br/>Stay tuned!
      </h2>
      <img className='avengers-logo' src={avengersLogo} alt="avengers logo" />
    </div>
  )
};

export default AppBanner;