import React from "react";
import "./Hamburger.css";

export const Hamburger = function (props) {
  return (
    <div className="hamburger" onClick={props.clicked}>
      <div className="hamburger-stroke"></div>
      <div className="hamburger-stroke"></div>
      <div className="hamburger-stroke"></div>
    </div>
  );
};
