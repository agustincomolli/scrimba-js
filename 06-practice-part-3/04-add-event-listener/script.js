let data = [
  {
    player: "Jane",
    score: 52
  },
  {
    player: "Mark",
    score: 41
  }
]

// Fetch the button from the DOM, store it in a variable
const button = document.querySelector("button");
const result = document.querySelector("#result");
// Use addEventListener() to listen for button clicks
button.addEventListener("click", function() {
  // Log Jane's score when the button is clicked (via data)
  result.textContent = `Jane's score is ${data[0].score}`;
})
