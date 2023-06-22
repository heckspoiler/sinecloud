import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Stations } from "./Components/Stations/Stations";
const Feed = lazy(() => import("./Components/Feed/Feed"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
