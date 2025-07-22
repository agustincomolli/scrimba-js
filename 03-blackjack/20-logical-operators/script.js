let hasCompletedCourse = true;
let givesCertificate = true;

function generateCertificate() {
  document.writeln("<p>Generating certificate....</p>");
};

if (hasCompletedCourse && givesCertificate) {
  generateCertificate();
};

let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (!hasSolvedChallenge && !hasHintsLeft) {
  showSolution();
};

function showSolution() {
  document.writeln("<p>Showing the solution....</p>");
};

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false;
let likesStartups = true;

if (likesDocumentaries || likesStartups) {
  recommendMovie();
};

function recommendMovie() {
  document.writeln("<p>Hey, check out this new film we think you will like!</p>");
};
