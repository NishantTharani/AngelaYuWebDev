var randomNumber1 = Math.floor(1 + Math.random() * 6);
var randomNumber2 = Math.floor(1 + Math.random() * 6);
var fpath1 = "images/dice" + randomNumber1 + ".png";
var fpath2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", fpath1);
document.querySelector(".img2").setAttribute("src", fpath2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
