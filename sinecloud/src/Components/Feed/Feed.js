import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./Feed.css";
import { CSSTransition } from "react-transition-group";

const Feed = () => {
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(
          "https://soundcloud4.p.rapidapi.com/user/info?profile_url=https%3A%2F%2Fsoundcloud.com%2Fkioskradio",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "439b27de4amshb8504f8f9c5e92ap1c69f7jsn6ee0a06dd329",
              "X-RapidAPI-Host": "soundcloud4.p.rapidapi.com",
            },
          }
        );

        if (!userResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const userData = await userResponse.json();
        setUser(userData);
        setTracks(userData.tracks);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
        setTimeout(() => setIsLoadingComplete(true), 1000); // Adjust delay to match your exit animation length
      }
    };

    fetchData();
  }, []);

  return (
    <div className="feed">
      <h1>
        Feed me <br />
        good music
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
              <ReactPlayer
                key={track.id}
                url={track.url}
                className="react-player"
              />
            );
          })}
      </section>
    </div>
  );
};

export default Feed;
