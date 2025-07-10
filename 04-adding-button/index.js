// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0;
incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", increment);
function increment() {
  count = count + 1;
  countElement = document.getElementById("count-el");
  countElement.innerText = count;
}