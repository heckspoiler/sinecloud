import React, { useEffect } from "react";
import "./SecondSection.css";
import { Logos } from "./Logos/Logos";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SecondSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animationTextSection = useAnimation();
  const animationLowerText = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTextSection.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 0.8 },
      });
      animationLowerText.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 2.5 },
      });
    }
  }, [inView]);

  return (
    <section className="second-section" ref={ref}>
      <m.section className="text-section" animate={animationTextSection}>
        <h2 className="second-section-title">discover new music</h2>
        <div className="second-section_block"></div>
        <p>
          Browse through the best radio stations out there and find new gems
          with us
        </p>
      </m.section>
      <Logos />
      <m.h2 animate={animationLowerText} className="second-title">
        and many more
      </m.h2>
    </section>
  );
};
