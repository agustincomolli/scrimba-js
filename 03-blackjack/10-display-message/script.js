
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
// Store the message-el paragraph in a variable called messageParagraph
let messageParagraph = document.getElementById("message");
// Store the sum paragraph in a variable called sumParagraph
let sumParagraph = document.querySelector("#sum");
// Store the cards paragraph in a variable called cards
let cardsParagraph = document.querySelector("#cards");

document.querySelector("button").addEventListener("click", startGame);

function startGame() {
  // Render the sum on the page using this format -> "Sum: 14"
  sumParagraph.textContent = "Suma: " + sum;
  // Render the cars on the page using this format -> "Cards: 10 4"
  cardsParagraph.textContent = "Cartas: " + firstCard + " " + secondCard;
  if (sum <= 20) {
    message = "¿Quieres tomar una carta nueva?";
  } else if (sum === 21) {
    message = "¡Wohoo! haz hecho Blackjack";
    hasBlackJack = true;
  } else {
    message = "¡Estás fuera del juego!";
    isAlive = false;
  }

  // 2. Display the message in the messageEl using messageEl.textContent
  messageParagraph.textContent = message;
};


