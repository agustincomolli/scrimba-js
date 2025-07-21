
let firstCard = 10;
let secondCard = 7;
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

function renderGame() {
  sumParagraph.textContent = "Suma: " + sum;
  cardsParagraph.textContent = "Cartas: " + cards[0] + " " + cards[1];
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
    let card = 2;
    sum += card;
    cards.push(card)
    renderGame();
};
