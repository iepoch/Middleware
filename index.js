//Create express server
const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const customMW = require("./custom_middleware.js");
//add server
const PORT = process.env.PORT || 9000;
const server = express();

//middleware
server.use(express.json(), logger("tiny"), helmet(), customMW.gatekeeper);

// route handlers
server.get("/", (req, res) => {
  res.json("this is live");
});


server.listen(PORT, () => {
  console.log(`code is running on ${PORT}`);
});
