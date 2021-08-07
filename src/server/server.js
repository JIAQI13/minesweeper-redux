const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

let score = { Jiaqi: 100 };

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/score", (req, res) => {
  console.log("read");
  res.json(score);
});

app.post("/score", (req, res) => {
  console.log(req.body);
  score.player = req.body.score;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
