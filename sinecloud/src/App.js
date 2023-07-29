import axios from "axios";
import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "intersection-observer";
import { motion } from "framer-motion";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Stations } from "./Components/Stations/Stations";
import { About } from "./Components/About/About";
const Feed = lazy(() => import("./Components/Feed/Feed"));

function App() {
  const [data, setData] = useState([]);

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
        <Navbar />
        <Routes>
          <Route path="/feed/:stationName" component={Feed} />
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<Stations />} />
          <Route
            path="/feed"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Feed />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
