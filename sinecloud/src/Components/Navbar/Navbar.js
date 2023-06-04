import React, { useState, useRef } from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <li>
        <a>HOME</a>
      </li>
      <li>
        <a>STATIONS</a>
      </li>
    </nav>
  );
};
