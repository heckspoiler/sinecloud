import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./Feed.css";
import faultradio from "../Home/SecondSection/Logos/radio-stations/fault-radio.png";
import kioskradio from "../Home/SecondSection/Logos/radio-stations/kiosk-radio.png";
import nts from "../Home/SecondSection/Logos/radio-stations/nts.png";
import thelotradio from "../Home/SecondSection/Logos/radio-stations/the-lot-radio.png";
import trnstnradio from "../Home/SecondSection/Logos/radio-stations/trnstn-radio.png";

const getLogoByUser = (user) => {
  switch (user) {
    case "faultradio":
      return faultradio;
    case "kioskradio":
      return kioskradio;
    case "nts-latest":
      return nts;
    case "thelotradio":
      return thelotradio;
    case "trnstnradio":
      return trnstnradio;
    default:
      return null;
  }
};

const Feed = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentRadioStation, setCurrentRadioStation] = useState("");
  const elementsRef = useRef([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/soundcloud")
      .then((response) => {
        if (!response.ok)
          throw new Error("Request failed with status " + response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsersData(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(usersData[0]?.user);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentRadioStation(entry.target.dataset.user); // Get user from data attribute and update state
          }
        });
      },
      { threshold: 0.5 }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [usersData]);

  return (
    <div className="feed">
      <h1>
        Feed me <br />
        new music
      </h1>
      <div className="rotate-div"></div>
      <div className="img-container">
        {usersData.length > 0 && (
          <img
            src={getLogoByUser(currentRadioStation)}
            className="radio-station-img"
            alt={currentRadioStation}
          />
        )}
      </div>

      {usersData.map((user, index) =>
        user.tracks.map((track, trackIndex) => (
          <div
            className="feed-player-container"
            data-user={user.user}
            ref={(element) => elementsRef.current.push(element)}
            key={trackIndex}
          >
            <ReactPlayer url={track.url} className="react-player" />
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
