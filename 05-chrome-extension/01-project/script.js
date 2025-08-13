// Create two variables:
//  myLeads -> should be assigned to an empty array
//  inputEl -> should be assigned to the text input field
let myLeads = JSON.parse(localStorage.getItem("leads")) || [];
const saveButton = document.querySelector("#save");
const saveTabButton = document.querySelector("#save-tab");
const deleteButton = document.querySelector("#delete");
const newLead = document.querySelector("#new-lead");
// Grab the unordered list and store it in a const variable called ulEl
const leadList = document.querySelector("#lead-list");

// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
function save(value) {
  myLeads.push(value);
  // Save the myLeads array to localStorage 
  localStorage.setItem("leads", JSON.stringify(myLeads));
  // Clear out the input field
  render(myLeads);
};

function saveInputLead() {
  save(newLead.value);
  newLead.value = "";
};

function saveTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    save(tabs[0].url);
  });
}

function deleteAll() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
};

function render(leads) {
  // Create a variable, listItems, to hold all the HTML for the list items
  // Assign it to an empty string to begin with
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    // leadList.innerHTML += "<li>" + myLeads[i] + "</li>";

    // Otra forma de hacerlo:
    //  const listItem = document.createElement("li");
    //  listItem.textContent = myLeads[i];
    //  leadList.append(listItem);

    // Best performance way
    listItems += `
      <li>
        <a href="https://${leads[i]}" target="_blank">${leads[i]}</a>
      </li>`;
  };

  // Render the listItems inside the unordered list using ulEl.innerHTML
  leadList.innerHTML = listItems;
};

saveButton.addEventListener("click", saveInputLead);
saveTabButton.addEventListener("click", saveTab);
// Listen for double clicks on the delete button (google it!)
deleteButton.addEventListener("dblclick", deleteAll);

render(myLeads);
