const express = require("express");
const app = express();
const port = 5000;

let score = { Jiaqi: 100 };

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/read", (req, res) => {
  res.json(score);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
