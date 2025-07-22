
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageParagraph = document.getElementById("message");
let sumParagraph = document.querySelector("#sum");
let cardsParagraph = document.querySelector("#cards");

document.querySelector("#start-game").addEventListener("click", startGame);
document.querySelector("#new-card").addEventListener("click", newCard);

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
  return 5;
};

function renderGame() {
  sumParagraph.textContent = "Suma: " + sum;
  // Create a for loop that renders out all the cards instead of just two
  cardsParagraph.textContent = "Cartas: ";
  for (let i = 0; i < cards.length; i++) {
    cardsParagraph.textContent += cards[i] + " ";
  };

  if (sum <= 20) {
    message = "¿Quieres tomar una carta nueva?";
  } else if (sum === 21) {
    message = "¡Wohoo! haz hecho Blackjack";
    hasBlackJack = true;
  } else {
    message = "¡Estás fuera del juego!";
    isAlive = false;
  }

  messageParagraph.textContent = message;
};

function startGame() {
  renderGame();
};

function newCard() {
  console.log("¡Sacar una nueva carta de la baraja!");
  let card = getRandomCard();
  sum += card;
  cards.push(card)
  renderGame();
};
