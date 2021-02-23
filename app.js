require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Everything is fine",
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `THE SERVER IS UP AND RUNNING ON PORT ${process.env.SERVER_PORT}`
  );
});
