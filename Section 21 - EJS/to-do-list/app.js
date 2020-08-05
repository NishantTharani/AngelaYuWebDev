const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var items = [];

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US");

  res.render("list", {
    kindOfDay: day,
    listItems: items,
  });
});

app.post("/", (req, res) => {
  let newItem = req.body.newItem;
  items.push(newItem);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
