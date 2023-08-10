import React, { useEffect, useState } from "react";
import "./Hamburger.css";

export const Hamburger = function ({ isOpen, toggleMenu }) {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <div className={`hamburger-stroke ${isOpen ? "stroke-1" : ""}`}></div>
      <div className={`hamburger-stroke ${isOpen ? "stroke-2" : ""}`}></div>
      <div className={`hamburger-stroke ${isOpen ? "stroke-3" : ""}`}></div>
    </div>
  );
};
