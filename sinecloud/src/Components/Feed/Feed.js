import React, { useEffect } from "react";
import "./Feed.css";

export const Feed = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#3448A8";

    return () => {
      document.body.style.backgroundColor = "transparent";
    };
  }, []);
  return (
    <section>
      <h1 class="feed-title">your personal feed</h1>
    </section>
  );
};