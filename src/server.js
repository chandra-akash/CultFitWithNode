const path = require("path");
const express = require("express");

const connect = require("./configs/db");

const homeController = require("./controllers/home.controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use("/home", homeController);

app.listen(3333, async () => {
  await connect();
  console.log("Listening on port 2345");
});
