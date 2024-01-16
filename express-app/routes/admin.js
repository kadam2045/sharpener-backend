const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"> <input type="text" name="title"><input type="number" name="count"> <button type="submit">Add Product</button></form>'
  );
});

adminRouter.post("/product", (req, res, next) => {
  console.log("insode product page");
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = adminRouter;
