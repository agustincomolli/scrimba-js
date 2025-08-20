import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

/**
 * Configuración de Firebase para la aplicación.
 * 
 * @constant
 * @type {Object}
 * @property {string} databaseURL - URL de la base de datos en tiempo real de Firebase.
 * @property {string} apiKey - Clave de API utilizada para autenticar solicitudes a Firebase.
 * @property {string} authDomain - Dominio de autenticación para la aplicación Firebase.
 * @property {string} projectId - ID del proyecto de Firebase.
 * @property {string} storageBucket - Bucket de almacenamiento de Firebase.
 * @property {string} messagingSenderId - ID del remitente para el servicio de mensajería de Firebase.
 * @property {string} appId - ID único de la aplicación Firebase.
 */
const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-c416d-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyDJDWb9kdzMCZWE6__FiyKjAu-n0d4wWzs",
  authDomain: "leads-tracker-app-c416d.firebaseapp.com",
  projectId: "leads-tracker-app-c416d",
  storageBucket: "leads-tracker-app-c416d.firebasestorage.app",
  messagingSenderId: "1035739025041",
  appId: "1:1035739025041:web:8858285091af67eba13930"
};

// Inicializa la aplicación de Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Obtiene una referencia a la base de datos en tiempo real de Firebase
const db = getDatabase(app);

// Recupera los leads almacenados en localStorage o inicializa un array vacío
let myLeads = JSON.parse(localStorage.getItem("leads")) || [];

// Referencias a los elementos del DOM
const saveButton = document.querySelector("#save");
const saveTabButton = document.querySelector("#save-tab");
const deleteButton = document.querySelector("#delete");
const newLead = document.querySelector("#new-lead");
const leadList = document.querySelector("#lead-list");


/**
 * Guarda un nuevo lead en el array y en localStorage, luego actualiza la vista.
 * @param {string} value - El lead a guardar (puede ser una URL o texto).
 */
function save(value) {
  myLeads.push(value);
  localStorage.setItem("leads", JSON.stringify(myLeads));
  render(myLeads);
};


/**
 * Guarda el lead ingresado en el input y limpia el campo.
 */
function saveInputLead() {
  save(newLead.value);
  newLead.value = "";
};


/**
 * Guarda la URL de la pestaña activa del navegador (requiere permisos de Chrome Extension).
 */
function saveTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    save(tabs[0].url);
  });
}


/**
 * Elimina todos los leads guardados y limpia la vista y el almacenamiento.
 */
function deleteAll() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
};


/**
 * Renderiza la lista de leads en el DOM.
 * @param {Array<string>} leads - Array de leads a mostrar.
 */
function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="https://${leads[i]}" target="_blank">${leads[i]}</a>
      </li>`;
  }

  leadList.innerHTML = listItems;
};


// Asigna los eventos a los botones
saveButton.addEventListener("click", saveInputLead);
saveTabButton.addEventListener("click", saveTab);
deleteButton.addEventListener("dblclick", deleteAll);

// Renderiza los leads al cargar la página
render(myLeads);
