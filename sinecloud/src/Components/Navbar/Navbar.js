import React from "react";
import "./Navbar.css";
import { NavbarItems } from "./NavbarItems/NavbarItems";
import { SearchBar } from "./SearchBar/SearchBar";
import { LoginSection } from "./LoginSection/LoginSection";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarItems />
      <SearchBar />
      <LoginSection />
    </nav>
  );
};
