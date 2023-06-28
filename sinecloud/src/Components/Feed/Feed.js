import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Feed.css";
import faultradio from "../Home/SecondSection/Logos/radio-stations/fault-radio.png";
import kioskradio from "../Home/SecondSection/Logos/radio-stations/kiosk-radio.png";
import nts from "../Home/SecondSection/Logos/radio-stations/nts.png";
import thelotradio from "../Home/SecondSection/Logos/radio-stations/the-lot-radio.png";
import trnstnradio from "../Home/SecondSection/Logos/radio-stations/trnstn-radio.png";

const Feed = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/soundcloud")
      .then((response) => {
        if (!response.ok)
          throw new Error("Request failed with status " + response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data); // print the raw data
        setUsersData(data.message);
      })
      .catch((error) => {
        console.error(error);
        // Handle error case
      });
  }, []);

  console.log(usersData); // log to see the data structure

  return (
    <div className="feed">
      <h1>
        Feed me <br />
        new music
      </h1>
      <h1 className="track-title-display">
        {usersData &&
          usersData.map((user, index) => (
            <p key={index}>{user.tracks.title}</p>
          ))}
      </h1>
      <img src={kioskradio} className="radio-station-img" />

      <section className="feed-container">
        {usersData.map((user) =>
          user.tracks.map((track, trackIndex) => (
            <div className="feed-player-container" key={trackIndex}>
              <ReactPlayer url={track.url} className="react-player" />
              <img src={user.user} alt={user.user} />
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Feed;
