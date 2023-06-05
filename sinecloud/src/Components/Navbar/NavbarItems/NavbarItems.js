import React from "react";
import "./NavbarItems.css";
import { Link } from "react-router-dom";

export const NavbarItems = () => {
  return (
    <ul className="navbar-items">
      <li>
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/stations" className="navbar-link">
          Stations
        </Link>
      </li>

      <li>
        <Link to="/feed" className="navbar-link">
          Feed
        </Link>
      </li>
    </ul>
  );
};
