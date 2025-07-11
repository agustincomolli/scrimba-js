let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function logLapTime() {
  console.log(lap1 + lap2 + lap3);
}

logLapTime();

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
};

incrementLap();
incrementLap();
incrementLap();


console.log(lapsCompleted)