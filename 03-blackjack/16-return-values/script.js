let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player1Time > player2Time) {
    return player2Time;
  } else {
    player1Time;
  }
};

let fastestRace = getFastestRaceTime();

document.writeln("<p>Menor tiempo: " + fastestRace + " minutos.</p>");

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();

document.writeln("<p>Tiempo total de la carrera: " + totalTime + " minutos.</p>");