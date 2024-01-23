const express = require("express");
const adminRouter = express.Router();
const bodyParser = require("body-parser");
adminRouter.use(bodyParser.urlencoded({ extended: false }));

adminRouter.get("/login", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/add-product" method="POST"> <input type="text" id="username" name="username">  <button type="submit">Login </button></form>'
  );
});

adminRouter.get("/add-product", (req, res, next) => {
  res.send(
    '<form onsubmit=document.getElementById(`username`).value= "localStorage.getItem(`username`)" action="/" method="POST"> <input type="text"  id="message" name="message" placeholder="enter message"> <br /> <input type="hidden" id="username" name="username">  <button type="submit">Add </button></form>'
  );
});
adminRouter.post("/", (req, res, next) => {
  const username = req.body.username;
  const message = req.body.message;
  console.log("username:", username, "message:", message);
  next();
});

module.exports = adminRouter;
