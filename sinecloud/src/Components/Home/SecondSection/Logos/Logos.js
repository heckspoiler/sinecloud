import React from "react";
import "./Logos.css";
import faultRadio from "./radio-stations/fault-radio.png";
import kioskRadio from "./radio-stations/kiosk-radio.png";
import nts from "./radio-stations/nts.png";
import theLotRadio from "./radio-stations/the-lot-radio.png";
import trnstn from "./radio-stations/trnstn-radio.png";

export const Logos = () => {
  return (
    <section className="logos-section">
      <img
        className="radio-img fault-radio"
        src={faultRadio}
        alt="Logo Fault Radio"
      />
      <img
        className="radio-img trnstn-radio"
        src={trnstn}
        alt="Logo trnstn Radio"
      />

      <img className="radio-img nts-radio" src={nts} alt="Logo NTS" />
      <img
        className="radio-img the-lot-radio"
        src={theLotRadio}
        alt="Logo The Lot Radio"
      />
      <img
        className="radio-img kiosk-radio"
        src={kioskRadio}
        alt="Logo Kiosk Radio"
      />
    </section>
  );
};
