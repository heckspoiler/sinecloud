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

const arr = [];

const fetchData = async (res) => {
  const profileURLs = [
    "kioskradio",
    // "trnstnradio",
    // "thelotradio",
    // "nts-latest",
    // "faultradio",
  ];
  try {
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
          console.log(response);
          return response.json();
        })
      )
    );

    responses.forEach((data) => {
      const fetchObj = {
        user: data.username,
      };
      console.log(data.username);
      arr.push(fetchObj);
    });

    res.json(arr);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch SoundCloud data abcdefg" });
  }
};

console.log(arr);

app.get("/api/soundcloud", (req, res) => {
  res.json({
    message: "Hello from the server!",
  });
});

app.listen(PORT, () => {
  console.log("Port's working wtf");
  console.log(`Server is listening on ${PORT}, coming from the server side`);
});
