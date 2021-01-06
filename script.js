"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);
  console.log(inputNumber);

  if (!inputNumber) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (inputNumber === number) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (inputNumber > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Game Over";
      document.querySelector(".score").textContent = 0;
    }
  } else if (inputNumber < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Game Over";
      document.querySelector(".score").textContent = 0;
    }
  }
});
