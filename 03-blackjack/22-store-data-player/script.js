let player = {
  name: "Agustín",
  chips: 200
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageParagraph = document.getElementById("message");
let sumParagraph = document.querySelector("#sum");
let cardsParagraph = document.querySelector("#cards");
let playerParagraph = document.querySelector("#player");

document.querySelector("#start-game").addEventListener("click", startGame);
document.querySelector("#new-card").addEventListener("click", newCard);

playerParagraph.textContent = player["name"] + ": $" + player["chips"];

// Make this function return a random number between 1 and 13
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  // if 1     -> return 11
  // if 11-13 -> return 10
  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 11) {
    return 10;
  } else {
    return randomCard;
  }
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
  // Generate two random numbes
  // Re-assign the cards and sum variables so that the game can start
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
};

function newCard() {
  // Sacar una nueva carta de la baraja si estoy vivo
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
  };
};
