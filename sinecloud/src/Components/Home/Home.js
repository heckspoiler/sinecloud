import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FirstSection } from "./FirstSection/FirstSection";
import { SecondSection } from "./SecondSection/SecondSection";
import { ThirdSection } from "./ThirdSection/ThirdSection";

export const Home = () => {
  return (
    <section>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </section>
  );
};
