let featureProducts = ["Notebook Dell", "Mouse Logitech", "Monitor Samsung 21'"];

let programmingExperience = ["HTML", "CSS", "JS", "Python", "Git / GitHub"];

console.log(programmingExperience[1]);
console.log(programmingExperience[2]);
console.log(programmingExperience[0]);

console.log("¿Cuántos elementos tiene el array? " + programmingExperience.length);

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
let myself = ["Agustín", 48, true];

// Push the newMessage to the messages array, and then log out the array

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage);
console.log(messages);

// How can you remove the last item in an array? Try to google it!
messages.pop();
console.log(messages);