// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

const box = document.querySelector("#box");

function handleClick() {
  console.log("¡Quiero abrir la caja!");
};

box.addEventListener("click", handleClick);