let randomNumber = Math.random();

document.writeln(randomNumber);


/* 

What does Math.random() do?

Your answer: Devuelve un número flotante aleatorio entre 0 y 1.

*/


randomNumber = Math.random() * 6;

document.writeln("</br>" + randomNumber);

/* 

In which range will our randomNumber be now?

From: 0
To: < 6

*/

// let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(3.45632);

document.writeln("</br>" + flooredNumber);


/* 

What does Math.floor() do to positive numbers?

Your answer: Transforma el número en entero.

*/

randomNumber = Math.floor(Math.random() * 6);

document.writeln("</br>" + randomNumber);

/* 

Write down all the possible values randomNumber can hold now!

0 1 2 3 4 5

*/

// Try to modify the expression so that we get a range from 1 to 6
randomNumber = Math.floor(Math.random() * 6) + 1;

document.writeln("</br>" + randomNumber);

// Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
};

document.writeln("</br>" + rollDice());