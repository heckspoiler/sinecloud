import React, { useEffect } from "react";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Logos.css";
import faultRadio from "./radio-stations/fault-radio.png";
import kioskRadio from "./radio-stations/kiosk-radio.png";
import nts from "./radio-stations/nts.png";
import theLotRadio from "./radio-stations/the-lot-radio.png";
import trnstn from "./radio-stations/trnstn-radio.png";

export const Logos = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animationFaultRadio = useAnimation();
  const animationTrnstnRadio = useAnimation();
  const animationNTS = useAnimation();
  const animationTheLotRadio = useAnimation();
  const animationKioskRadio = useAnimation();

  useEffect(() => {
    if (inView) {
      animationFaultRadio.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1 },
      });
      animationTrnstnRadio.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1.2 },
      });
      animationNTS.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1.4 },
      });
      animationTheLotRadio.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1.6 },
      });
      animationKioskRadio.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1.8 },
      });
    }
  }, [inView]);

  return (
    <section className="logos-section" ref={ref}>
      <m.img
        className="radio-img fault-radio"
        src={faultRadio}
        alt="Logo Fault Radio"
        animate={animationFaultRadio}
      />
      <m.img
        className="radio-img trnstn-radio"
        src={trnstn}
        alt="Logo trnstn Radio"
        animate={animationTrnstnRadio}
      />

      <m.img
        className="radio-img nts-radio"
        src={nts}
        alt="Logo NTS"
        animate={animationNTS}
      />
      <m.img
        className="radio-img the-lot-radio"
        src={theLotRadio}
        alt="Logo The Lot Radio"
        animate={animationTheLotRadio}
      />
      <m.img
        className="radio-img kiosk-radio"
        src={kioskRadio}
        alt="Logo Kiosk Radio"
        animate={animationKioskRadio}
      />
    </section>
  );
};
