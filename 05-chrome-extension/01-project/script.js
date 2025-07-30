// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// Create two variables:
//  myLeads -> should be assigned to an empty array
//  inputEl -> should be assigned to the text input field


const saveButton = document.querySelector("#save");
const newLead = document.querySelector("#new-lead");
let myLeads = [];

function save() {
  console.log("¡Botón presionado!")
}

saveButton.addEventListener("click", save);
