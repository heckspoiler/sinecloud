import React from "react";
import { Station } from "./Station/Station";
import "./Stations.css";

export const Stations = () => {
  return (
    <div className="stations-container">
      <h1>We love these stations!</h1>
      <Station />
    </div>
  );
};
