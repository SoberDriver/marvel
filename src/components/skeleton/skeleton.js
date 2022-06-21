import './skeleton.scss';
import React from "react";

const Skeleton = (props) => {
  return (
    <div className='skeleton'>
      <p className='skeleton-title'>Please select a character to see information</p>
      <div className="skeleton-first-block">
        <div className="skeleton-round"></div>
        <div className="skeleton-thin"></div>
      </div>
      <div className="skeleton-second-block">
        <div className="skeleton-thick"></div>
        <div className="skeleton-thick"></div>
        <div className="skeleton-thick"></div>
      </div>
    </div>
  )
};

export default Skeleton;