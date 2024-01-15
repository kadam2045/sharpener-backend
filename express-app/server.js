const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("in the product middlware");

  res.send(
    '<form action="/product" method="POST"> <input type="text" name="title"><input type="number" name="count"> <button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hellow</h1>");
});

app.listen(port);
