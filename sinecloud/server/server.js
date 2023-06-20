// server.js
require("dotenv").config();
console.log("Hello from server.js");
const express = require("express");
const axios = require("axios");
const app = express();

app.get("../src/Components/Feed/Feed.js", async (req, res) => {
  try {
    const response = await axios.get(
      "https://soundcloud4.p.rapidapi.com/user/info",
      {
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.RAPIDAPI_HOST,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
