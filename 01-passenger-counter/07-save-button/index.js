// 1. Create a function, save(), which logs out the count when it's called

function increment() {
  count = count + 1;
  countElement = document.getElementById("count-el");
  countElement.innerText = count;
}

function save() {
  console.log(count);
};

let count = 0;

incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", increment);
saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", save);