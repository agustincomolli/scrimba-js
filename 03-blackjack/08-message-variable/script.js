
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

// 1. Declare a variable called message and assign its value to an empty string
let message = "";

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
  message = "¿Quieres tomar una carta nueva? 🙂";
} else if (sum === 21) {
  message = "¡Wohoo! haz hecho Blackjack 🥳";
  hasBlackJack = true;
} else {
  message = "¡Estás fuera del juego! 😭";
  isAlive = false;
}

// 3. Log it out!
console.log(message);