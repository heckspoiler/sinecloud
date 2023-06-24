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

  useEffect(() => {
    const fetchData = async () => {
      const profileURLs = [
        "kioskradio",
        "trnstnradio",
        "thelotradio",
        "nts-latest",
        "faultradio",
      ];

      try {
        const arr = [];
        const responses = await Promise.all(
          profileURLs.map((profile_url) =>
            fetch(
              `https://soundcloud4.p.rapidapi.com/user/info?profile_url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(
                profile_url
              )}`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Key":
                    "439b27de4amshb8504f8f9c5e92ap1c69f7jsn6ee0a06dd329",
                  "X-RapidAPI-Host": "soundcloud4.p.rapidapi.com",
                },
              }
            ).then((response) => {
              if (!response.ok) throw new Error("Network response was not ok");
              return response.json();
            })
          )
        );

        setUsers(responses.map((response) => response.user)); // check this out bc of structuring, ask GPT if this useage is valid or not.
        setTracks(responses.flatMap((response) => response.tracks));
        const users = responses.map((response) => {
          return {
            user: response.user,
            tracks: response.tracks,
          };
        });
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
        setTimeout(() => setIsLoadingComplete(true), 1000);
      }
    };
    console.log(users);
    fetchData();
  }, []);

  return (
    <div className="feed">
      <h1>
        Feed me <br />
        new music
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
