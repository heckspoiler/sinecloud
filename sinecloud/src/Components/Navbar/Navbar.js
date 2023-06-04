import React from "react";
import "./Navbar.css";
import { NavbarItems } from "./NavbarItems/NavbarItems";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarItems />
    </nav>
  );
};
