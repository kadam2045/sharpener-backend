const express = require("express");

const app = express();

const port = 4000;

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in the another middlware");
  res.send("<h1>hellow</h1>");
});
app.listen(port);
