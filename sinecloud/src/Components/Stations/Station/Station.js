import React from "react";
import "./Station.css";
import kioskradio from "./Logos/radio-stations/kiosk-radio.png";
import web from "./Logos/web/globe.svg";
import instagram from "./Logos/web/instagram.svg";
import soundcloud from "./Logos/web/soundcloud.svg";

export const Station = () => {
  return (
    <div className="stations_radio-station">
      <h2>Kiosk Radio</h2>
      <img src={kioskradio} className="stations_radio-image"></img>

      <h3>Brussels, Belgium</h3>
      <section className="stations_logo-container">
        <a href="#">
          {" "}
          <img
            src={web}
            alt="globe-logo-web"
            className="stations_social-svg social-svg-web"
          ></img>
        </a>
        <a href="#">
          <img
            src={instagram}
            alt="globe-logo-web"
            className="stations_social-svg social-svg-instagram"
          ></img>
        </a>
        <a href="#">
          <img
            src={soundcloud}
            alt="globe-logo-web"
            className="stations_social-svg social-svg-soundcloud"
          ></img>
        </a>
      </section>
    </div>
  );
};
