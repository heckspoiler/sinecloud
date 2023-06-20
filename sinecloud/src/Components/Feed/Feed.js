import React, { useEffect } from "react";
import "./Feed.css";
import axios from "axios";

export const Feed = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#3448A8";

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
