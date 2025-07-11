// 1. Create a function, save(), which logs out the count when it's called
let count = 0;

incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", increment);

function increment() {
  count = count + 1;
  countElement = document.getElementById("count-el");
  countElement.innerText = count;
}