import React from "react";
import "./NavbarItems.css";
import { Link } from "react-router-dom";

export const NavbarItems = ({ onItemClicked }) => {
  return (
    <ul className="navbar-items">
      <li onClick={onItemClicked}>
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </li>
      <li onClick={onItemClicked}>
        <Link to="/stations" className="navbar-link">
          Stations
        </Link>
      </li>

      <li onClick={onItemClicked}>
        <Link to="/feed" className="navbar-link">
          Feed
        </Link>
      </li>

      <li onClick={onItemClicked}>
        <Link to="/about" className="navbar-link">
          About
        </Link>
      </li>
    </ul>
  );
};
