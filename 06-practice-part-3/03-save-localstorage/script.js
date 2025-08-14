// Save a value to localStorage
if (!localStorage.getItem("username")) {
  localStorage.setItem("username", "agustincomolli");
};
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
const username = localStorage.getItem("username");
document.writeln(`¡Bienvenido ${username}!`);