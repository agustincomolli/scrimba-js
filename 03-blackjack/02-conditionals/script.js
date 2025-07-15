let firstCard = 17;
let secondCard = 11;
let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("¿Quieres tomar una carta nueva? 🙂");
} else if (sum === 21) {
  console.log("¡Wohoo! haz hecho Blackjack 🥳");
} else {
  console.log("¡Estás fuera del juego! 😭")
}