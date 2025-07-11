// Change this to use the plus equal technique you've learned

function increment() {
  count += 1;
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