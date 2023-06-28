const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

let dataCache = null; // Store the fetched data
let isFetching = false; // Flag variable to control fetching behavior

const fetchData = async () => {
  try {
    const profileURLs = [
      "kioskradio",
      "trnstnradio",
      // "thelotradio",
      // "nts-latest",
      // "faultradio",
    ];

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

    const arr = responses.map((data) => ({
      user: data.username,
      tracks: data.tracks,
    }));

    dataCache = arr; // Update the data cache

    console.log("Data fetched:", arr);
  } catch (error) {
    console.error(error);
  } finally {
    isFetching = false; // Reset the flag after fetching is completed
  }
};

const fetchInterval = 60 * 60 * 500; // Fetch every 30 minutes

// Fetch data initially and start the interval
fetchData();
setInterval(() => {
  if (!isFetching) {
    fetchData();
  }
}, fetchInterval);

app.get("/api/soundcloud", (req, res) => {
  if (dataCache) {
    res.json({
      message: dataCache,
    });
  } else {
    res.status(500).json({ error: "No data available" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
