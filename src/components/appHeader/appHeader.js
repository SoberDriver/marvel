import './appHeader.scss';
import React from "react";

const AppHeader = (props) => {
  return (
    <header className="app-header">
      <a href="#">
        <h1>
          <span>Marvel </span>information portal
        </h1>
      </a>
      <nav>
        <a href="#"><h1><span>Characters </span></h1></a>
        <h1> /</h1>
        <a href="#" ><h1>Comics</h1></a>
      </nav>


    </header>
  )
};

export default AppHeader;