import React, { useEffect } from "react";
import "./Feed.css";
import axios from "axios";

export const Feed = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#3448A8";

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://soundcloud4.p.rapidapi.com/user/info",
        params: {
          profile_url: "https://soundcloud.com/kioskradio",
        },
        headers: {
          "X-RapidAPI-Key":
            "439b27de4amshb8504f8f9c5e92ap1c69f7jsn6ee0a06dd329",
          "X-RapidAPI-Host": "soundcloud4.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      document.body.style.backgroundColor = "transparent";
    };
  }, []);

  return (
    <section className="feed">
      <h1 className="feed-title">your personal feed</h1>
    </section>
  );
};
