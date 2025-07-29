let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random 
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  const player1 = Math.floor(Math.random() * fighters.length);
  const player2 = Math.floor(Math.random() * fighters.length);
  const stage = document.querySelector("#stage");

  stage.textContent = fighters[player1] + " vs " + fighters[player2];
});
