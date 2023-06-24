// server.js
const cors = require("cors");
require("dotenv").config();
console.log(process.env.REACT_APP_RAPIDAPI_KEY);
console.log(process.env.REACT_APP_RAPIDAPI_HOST);
console.log("Hello from server.js");
const express = require("express");
const axios = require("axios");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/api/feed", async (req, res) => {
  try {
    const response = await axios.get(
      "https://soundcloud4.p.rapidapi.com/user/info",
      {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const test = "test";

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
