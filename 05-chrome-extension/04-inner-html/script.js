// Use .innerHTML to render a Buy! button inside the div container
const container = document.querySelector("#container");
container.innerHTML = "<button id='buy'>¡Comprar!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

const buyButton = document.querySelector("#buy");
buyButton.addEventListener("click", handleClick);

function handleClick() {
  container.innerHTML += "<p>¡Gracias por comprar!</p>";
};