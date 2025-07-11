// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeMessage = document.getElementById("welcome-message");

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Agustín";
let greeting = "Bienvenido de nuevo ";

// Render the welcome message using welcomeEl.innerText
welcomeMessage.innerText = greeting + name;

// Add an emoji to the end! 
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
welcomeMessage.innerText += " 🥳";