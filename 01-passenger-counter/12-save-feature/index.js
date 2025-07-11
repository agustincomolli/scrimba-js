// 1. Grab the save-el paragrah and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

function increment() {
  count += 1;
  let countElement = document.getElementById("count-el");
  countElement.innerText = count;
}

function save() {
  let countWithSeparator = count + " - ";
  // Usar textContent en lugar de innerText o innerHTML, tiene mejor rendimiento
  // y muestra los espacios en blanco.
  saved.textContent += countWithSeparator;
  console.log(count);
};

let count = 0;

let incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", increment);

let saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", save);

let saved = document.getElementById("saved");
