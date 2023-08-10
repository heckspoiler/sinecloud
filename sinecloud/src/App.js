import axios from "axios";
import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "intersection-observer";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Stations } from "./Components/Stations/Stations";
import { About } from "./Components/About/About";
import { Hamburger } from "./Components/Navbar/Hamburger/Hamburger";
const Feed = lazy(() => import("./Components/Feed/Feed"));

function App() {
  const [data, setData] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      console.log("Toggling menu:", !prev);
      return !prev;
    }, []);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/about" element={<About />} />
          <Route path="/feed/:stationName" component={Feed} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
