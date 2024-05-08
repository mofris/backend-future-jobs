const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const userRouter = require("./app/api/users/router");

const URL = "/api/v1";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to Server Future PT. Citra Borneo Indah Jobs",
    version: "1.0.0",
    author: "Mochammad Faris",
    contact: "loveinsemarang@gmail.com",
  });
});

app.use(`${URL}`, userRouter);

module.exports = app;
