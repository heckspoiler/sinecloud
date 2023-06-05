import React, { useEffect } from "react";
import "./ThirdSection.css";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import discord from "./assets/discord.png";
import swirl from "./assets/swirl.png";
import cloud from "./assets/clouds.png";

export const ThirdSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const controls = useAnimation();
  const buttonAnimation = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      if (inView) {
        controls.start({
          opacity: 1,
          transition: { type: "spring", duration: 2, bounce: 0.3, delay: 0.8 },
        });
        buttonAnimation.start({
          opacity: 1,
          transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1.2 },
        });
      }
    };
    sequence();
  }, [controls, inView]);

  return (
    <section className="third-section" ref={ref}>
      <m.section
        className="third-section-text"
        style={{ opacity: 0 }}
        animate={controls}
      >
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
      </m.section>
      <m.button
        className="learn-more-button"
        style={{ opacity: 0 }}
        animate={buttonAnimation}
      >
        Learn more here!
      </m.button>
      <img src={cloud} className="section-three-cloud" alt="cloud" />
    </section>
  );
};
