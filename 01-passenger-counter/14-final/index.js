
function increment() {
  count += 1;
  countElement.textContent = count;
}

function save() {
  let countWithSeparator = count + " - ";
  saved.textContent += countWithSeparator;
  console.log(count);
  count = 0;
  countElement.textContent = count;
};

let count = 0;

let countElement = document.getElementById("count-el");

let incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", increment);

let saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", save);

let saved = document.getElementById("saved");
