// Check if the person is elegible for a birthday card from the King! (100)

let age = 100;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
  console.log("No es elegible");
} else if (age === 100) {
  console.log("¡Aquí está tu tarjeta de cumpleaños del Rey!");
} else {
  console.log("No es elegible porque ya tiene una.")
}