import React, { useState, useEffect } from "react";
import "./Feed.css";
import axios from "axios";

export const Feed = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5001/api/feed");

      console.log(result.data);
    };

    fetchData();
  }, []);

  return <div>Feed Component</div>;
};
