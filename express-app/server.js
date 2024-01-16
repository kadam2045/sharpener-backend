const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoute);
app.use("/shop", shopRoute);

app.use("/", (req, res, next) => {
  res.send("<h1>Hello buddy</h1>");
});
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>"); // use take slash('/') as default ask this doubt why error page is not showe
});

const port = 4000;

app.listen(port);
