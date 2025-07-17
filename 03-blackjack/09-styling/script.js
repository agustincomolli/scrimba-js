
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
document.querySelector("button").addEventListener("click", startGame());

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
  if (sum <= 20) {
    message = "¿Quieres tomar una carta nueva? 🙂";
  } else if (sum === 21) {
    message = "¡Wohoo! haz hecho Blackjack 🥳";
    hasBlackJack = true;
  } else {
    message = "¡Estás fuera del juego! 😭";
    isAlive = false;
  }

  console.log(message);
};


