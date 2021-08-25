const path = require("path");
const express = require("express");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

app.listen(2345, async () => {
  await connect();
  console.log("Listening on port 2345:");
});
