import React from "react";
import "./ThirdSection.css";
import discord from "./assets/discord.png";
import swirl from "./assets/swirl.png";
import cloud from "./assets/clouds.png";

export const ThirdSection = () => {
  return (
    <section className="third-section">
      <section className="third-section-text">
        <h2>join the community</h2>
        <div className="third-section-block"></div>
        <p>
          Our discord is there for you to connect! Talk, exchange and get to
          know new people. Music is sharing!
        </p>
        <a href="www.discord.com">
          <img src={discord} className="discord-logo" alt="Discord Logo" />
          <img src={swirl} className="swirl-1" alt="swirl" />
          <img src={swirl} className="swirl-2" alt="swirl" />
        </a>
      </section>
      <button className="learn-more-button">Learn more here!</button>
      <img src={cloud} className="section-three-cloud" alt="cloud" />
    </section>
  );
};
