//Create express server
const express = require("express");
const PORT = 9000;
const helmet = require("helmet");
const logger = require("morgan");
const customMW = require("./custom_middleware.js");
//add server
const server = express();

//middleware
server.use(express.json(), logger("tiny"), helmet(), customMW.gatekeeper)

// route handlers
server.get("/", (req, res) => {
  res.json("this is live");
});
server.get("/enterance", (req, res) => {
  res.json({ message: "Access Granted" });
});
server.get("/enterance", (req, res) => {
  res.json({ message: "Access Granted" });
});

server.listen(PORT, () => {
  console.log(`code is running on ${PORT}`);
});
