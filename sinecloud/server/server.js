const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/api/soundcloud", (req, res) => {});

app.get("/", (req, res) => {
  console.log(`Server is listening on ${PORT}`);
  res.send(
    "Welcome to the server öjasdföajdflökjadsöflkjasödflkajsdfölkajfölkasjdf"
  );
});

app.listen(PORT, () => {
  console.log("Port's working wtf");
  console.log(`Server is listening on ${PORT}, coming from the server side`);
});
