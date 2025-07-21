document.writeln("<h1>Bucles en JS</h1>")
// Count to ten!
document.writeln("<h2>Contar hasta 10</h2>")

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START          FINISH     STEP SIZE
for (let count = 1; count < 11; count += 1) {
  console.log(count);
  document.writeln(count + " ");
};

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
document.writeln("<h2>Contar dede 10 hasta 100 en saltos de 10</h2>");
for (let count = 10; count < 101; count += 10) {
  document.writeln(count + " ");
};

// Loops and arrays
let messages = [
"Hola, ¿qué tal?",
"¡Genial, gracias! ¿Y tú?",
"Todo bien. He estado trabajando en mi portafolio últimamente.",
"¡Igualmente!"
];

document.writeln("<h2>Bucles y arrays</h2>");

for (i = 0; i < messages.length; i++) {
  document.writeln(messages[i] + "</br>");
};

let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
};