document.querySelectorAll(".drum").forEach((item) => {
  item.addEventListener("click", handleClick);
});

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  playRightSound(event.key);
}

function handleClick() {
  playRightSound(this.innerHTML);
}

function playRightSound(keycode) {
  switch (keycode) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default:
      console.log(keycode);
      break;
  }
}
