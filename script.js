"use strict";

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);

  if (!inputNumber) {
    displayMessage("⛔ No number!");
  } else if (inputNumber === number) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (inputNumber !== number) {
    if (score > 1) {
      displayMessage(inputNumber > number ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 Game Over");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
