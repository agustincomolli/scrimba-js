
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;

// 1. Create a variable called isAlive and assign it to true
let isAlive = true;

// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
  console.log("¿Quieres tomar una carta nueva? 🙂");
} else if (sum === 21) {
  console.log("¡Wohoo! haz hecho Blackjack 🥳");
  hasBlackJack = true;
} else {
  console.log("¡Estás fuera del juego! 😭");
  isAlive = false;
}

// 3. Log it out to check that you're doing it right
console.log(isAlive);