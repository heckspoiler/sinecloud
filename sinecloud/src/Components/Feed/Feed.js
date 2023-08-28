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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [usersData, setUsersData] = useState([]);
  const [currentRadioStation, setCurrentRadioStation] = useState("");
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const elementsRef = useRef([]);
  const limit = 5;
  const lastTrackRef = useRef();

  useEffect(() => {
    window.scrollTo(0, scrollPosition);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const fetchTracks = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    fetch(
      `http://localhost:4000/api/soundcloud?offset=${offset}&limit=${limit}`
    )
      .then((response) => {
        if (!response.ok)
          throw new Error("Request failed with status " + response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsersData((oldData) => [...oldData, ...data.message]);
        setOffset((oldOffset) => oldOffset + limit);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentRadioStation(entry.target.dataset.user);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading) {
            fetchTracks(); // Fetch more tracks when last track is in view
          }
        });
      },
      { threshold: 0.2 }
    );

    if (lastTrackRef.current) {
      observer.observe(lastTrackRef.current);
    }

    return () => {
      if (lastTrackRef.current) {
        observer.unobserve(lastTrackRef.current);
      }
    };
  }, [usersData, isLoading]);

  return (
    <div className="feed">
      <h1>
        Feed me <br className="break-title" />
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

      {usersData.map((data, index) => {
        const isLastItem = index === usersData.length - 1;
        return (
          <div
            className="feed-player-container"
            data-user={data.user}
            ref={(element) => {
              elementsRef.current.push(element);
              if (isLastItem) lastTrackRef.current = element;
            }}
            key={index}
          >
            <ReactPlayer url={data.track.url} className="react-player" />
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
