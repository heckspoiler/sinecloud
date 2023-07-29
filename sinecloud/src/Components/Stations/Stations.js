import React from "react";
import { Station } from "./Station/Station";
import "./Stations.css";
import kioskradio from "./Station/Logos/radio-stations/kiosk-radio.png";
import nts from "./Station/Logos/radio-stations/nts.png";
import fault from "./Station/Logos/radio-stations/fault-radio.png";
import theLotRadio from "./Station/Logos/radio-stations/the-lot-radio.png";
import trnstn from "./Station/Logos/radio-stations/trnstn-radio.png";

const stations = [
  {
    name: "Kiosk Radio",
    logo: kioskradio,
    url: "https://kioskradio.com",
    instagram: "https://www.instagram.com/kioskradio/",
    soundcloud: "https://soundcloud.com/kioskradio",
  },

  {
    name: "Fault Radio",
    logo: fault,
    url: "https://faultradio.com",
    instagram: "https://www.instagram.com/its_fault_radio",
    soundcloud: "https://soundcloud.com/faultradio",
  },
  {
    name: "NTS Radio",
    logo: nts,
    url: "https://nts.com",
    instagram: "https://www.instagram.com/kioskradio/",
    soundcloud: "https://soundcloud.com/nts-latest",
  },
  {
    name: "The Lot Radio",
    logo: theLotRadio,
    url: "https://www.thelotradio.com",
    instagram: "https://www.instagram.com/thelotradio",
    soundcloud: "https://soundcloud.com/THELOTRADIO",
  },
  {
    name: "TRNSTN Radio",
    logo: trnstn,
    url: "https://trnstnradio.com",
    instagram: "https://www.instagram.com/trnstnradio/",
    soundcloud: "https://soundcloud.com/trnstnradio",
  },
];

export const Stations = () => {
  return (
    <div className="stations-container">
      <h1>We love these stations!</h1>
      {stations.map((station) => (
        <Station
          name={station.name}
          key={station.name}
          logo={station.logo}
          url={station.url}
          instagram={station.instagram}
          soundcloud={station.soundcloud}
        />
      ))}
    </div>
  );
};
