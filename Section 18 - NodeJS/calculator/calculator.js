const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let sum = num1 + num2;
  res.send("The answer is: " + sum);
  console.log(req.body);
});

app.post("/bmicalculator", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = weight / (height * height);
  res.send("Your BMI is: " + bmi);
  console.log(req.body);
});

app.listen(3000);
