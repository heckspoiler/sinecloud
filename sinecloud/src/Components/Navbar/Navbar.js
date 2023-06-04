import React from "react";
import "./Navbar.css";
import { NavbarItems } from "./NavbarItems/NavbarItems";
import { SearchBar } from "./SearchBar/SearchBar";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarItems />
      <SearchBar />
    </nav>
  );
};
