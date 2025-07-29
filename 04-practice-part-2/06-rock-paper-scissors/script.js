let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getHand(){
  const number = Math.floor(Math.random() * hands.length);
  return hands[number];
};

console.log(getHand());