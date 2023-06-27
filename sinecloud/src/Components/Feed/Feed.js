import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Feed.css";
import faultradio from "../Home/SecondSection/Logos/radio-stations/fault-radio.png";
import kioskradio from "../Home/SecondSection/Logos/radio-stations/kiosk-radio.png";
import nts from "../Home/SecondSection/Logos/radio-stations/nts.png";
import thelotradio from "../Home/SecondSection/Logos/radio-stations/the-lot-radio.png";
import trnstnradio from "../Home/SecondSection/Logos/radio-stations/trnstn-radio.png";

const Feed = () => {
  const [users, setUsers] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/soundcloud")
      .then((response) => {
        if (!response.ok)
          throw new Error("Request failed with status " + response.status);
        return response.json();
      })
      .then((data) => {
        console.log(Array.isArray(data.message));
        setMessage(data); // Set the message received from the backend
      })
      .catch((error) => {
        console.error(error);
        // Handle error case
      });
  }, []);

  return (
    <div className="feed">
      <h1>
        Feed me <br />
        new music
        {Array.isArray(message) &&
          message.map((item, index) => <p key={index}>{item.user}</p>)}
      </h1>
      <section className="feed-container">
        {!isLoadingComplete && (
          <div className="loading-container" role="status">
            <div
              className={`loading-left ${
                !isLoading && !isLoadingComplete ? "exit-left" : ""
              }`}
              role="status"
            ></div>
            <div
              className={`loading-right ${
                !isLoading && !isLoadingComplete ? "exit-right" : ""
              }`}
              role="status"
            ></div>
          </div>
        )}
        {!isLoading &&
          tracks.map((track) => {
            return (
              <div className="feed-player-container">
                <ReactPlayer
                  key={track.id}
                  url={track.url}
                  className="react-player"
                />
                <img src={users.username} />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Feed;
