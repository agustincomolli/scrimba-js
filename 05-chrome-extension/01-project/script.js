// Create two variables:
//  myLeads -> should be assigned to an empty array
//  inputEl -> should be assigned to the text input field
let myLeads = [];
const saveButton = document.querySelector("#save");
const newLead = document.querySelector("#new-lead");
// Grab the unordered list and store it in a const variable called ulEl
const leadList = document.querySelector("#lead-list");

// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
function save() {
  myLeads.push(newLead.value);
  // Save the myLeads array to localStorage 
  localStorage.setItem("leads", JSON.stringify(myLeads));
  // Clear out the input field
  newLead.value = "";
  renderLeads();
}

function renderLeads() {
  // Create a variable, listItems, to hold all the HTML for the list items
  // Assign it to an empty string to begin with
  let listItems = "";

  myLeads = JSON.parse(localStorage.getItem("leads")) || [];

  for (let i = 0; i < myLeads.length; i++) {
    // leadList.innerHTML += "<li>" + myLeads[i] + "</li>";

    // Otra forma de hacerlo:
    //  const listItem = document.createElement("li");
    //  listItem.textContent = myLeads[i];
    //  leadList.append(listItem);

    // Best performance way
    listItems += `
      <li>
        <a href="https://${myLeads[i]}" target="_blank">${myLeads[i]}</a>
      </li>`;
  };

  // Render the listItems inside the unordered list using ulEl.innerHTML
  leadList.innerHTML = listItems;
};

saveButton.addEventListener("click", save);

renderLeads();
