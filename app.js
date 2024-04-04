const path = require("path");
const express = require("express");

const inventoryRoutes = require("./routes/inventory");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(inventoryRoutes);


app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).render("500");
});

app.listen(3000);