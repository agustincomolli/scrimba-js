const welcome = document.querySelector("#welcome");
const results = document.querySelector("#results");
const br = "</br>";

function writeParagraph(message) {
  return `<p>${message}</p>`;
};

function greetUser(greet, username, emoji="👋") {
  welcome.textContent = `¡${greet}, ${username} ${emoji}!`;
};

greetUser("Bienvenido","Agustín Comolli");


// Create a function, add(), that adds two numbers together and returns the sum
function add(number1, number2) {
  return number1 + number2;
};


results.innerHTML += writeParagraph(`3 + 4 = ${add(3,4)}`); // should log 7
results.innerHTML +=  writeParagraph(`9 + 102 = ${add(9, 102)}`); // should log 111

// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(array) {
  return array[0];
};


// Call it with an array as an argument to verify that it works
results.innerHTML += writeParagraph(`El primer item es:  
  ${getFirst(["Agustín", "Lorena", "Carlitos", "Adrián"])}`);