// Create two variables:
//  myLeads -> should be assigned to an empty array
//  inputEl -> should be assigned to the text input field
const saveButton = document.querySelector("#save");
const newLead = document.querySelector("#new-lead");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// Grab the unordered list and store it in a const variable called ulEl
const leadList = document.querySelector("#lead-list");

// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
function save() {
  myLeads.push(newLead.value);
  console.log(myLeads);
}

saveButton.addEventListener("click", save);

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  leadList.innerHTML += "<li>" + myLeads[i] + "</li>";
};