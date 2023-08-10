import React from "react";
import "./Navbar.css";
import { NavbarItems } from "./NavbarItems/NavbarItems";
import { SearchBar } from "./SearchBar/SearchBar";
import { LoginSection } from "./LoginSection/LoginSection";

export const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <nav className={`navbar ${isOpen ? "navbar-open" : ""}`}>
      <NavbarItems onItemClicked={toggleMenu} />
      {/* <SearchBar /> */}

      <LoginSection />
    </nav>
  );
};
