const express = require("express");
const shopRoute = express.Router();

shopRoute.get("/", (req, res, next) => {
  res.send("<h1>Welcome to shop</h1>");
});



module.exports = shopRoute;
