// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function purchase() {
  let errorParagraph = document.getElementById("error");
  errorParagraph.textContent = "Algo anduvo mal, por favor intente nuevamente."
};

let purchaseButton = document.querySelector("button");
purchaseButton.addEventListener("click", purchase);