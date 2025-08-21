import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
// Importa la configuración de firebase desde un archivo separado (no subir firebaseConfig.js al repo)
import { firebaseConfig } from "./firebaseConfig.js";

// Inicializa la aplicación de Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Obtiene una referencia a la base de datos en tiempo real de Firebase
const db = getDatabase(app);

// Referencias a los elementos del DOM
const saveButton = document.querySelector("#save");
const deleteButton = document.querySelector("#delete");
const newLead = document.querySelector("#new-lead");
const leadList = document.querySelector("#lead-list");


/**
 * Guarda el lead ingresado en el input y limpia el campo.
 */
function saveInputLead() {
  newLead.value = "";
};


/**
 * Elimina todos los leads guardados y limpia la vista y el almacenamiento.
 */
function deleteAll() {
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
deleteButton.addEventListener("dblclick", deleteAll);
