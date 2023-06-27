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
        {usersData &&
          usersData.map((user, index) => <p key={index}>{user.user}</p>)}
      </h1>
      <section className="feed-container">
        {!isLoading &&
          tracks.map((track) => {
            return (
              <div
                className="feed-player-container"
                key={usersData.tracks.title}
              >
                <ReactPlayer
                  url={usersData.tracks.url}
                  className="react-player"
                />
                <img src={usersData.username} alt={usersData.username} />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Feed;
