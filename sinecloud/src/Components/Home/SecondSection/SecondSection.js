import React from "react";
import "./SecondSection.css";
import { Logos } from "./Logos/Logos";

export const SecondSection = () => {
  return (
    <section className="second-section">
      <section className="text-section">
        <h2 className="second-section-title">discover new music</h2>
        <div className="second-section_block"></div>
        <p>
          Browse through the best radio stations out there and find new gems
          with us
        </p>
      </section>
      <Logos />
      <h2>and much more</h2>
    </section>
  );
};
