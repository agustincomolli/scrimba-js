
// Importaciones de Firebase para inicializar la app y manipular la base de datos en tiempo real
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getDatabase,   // Para obtener la instancia de la base de datos
  ref,           // Para crear referencias a rutas dentro de la base de datos
  push,          // Para agregar nuevos elementos a una lista en la base de datos
  onValue,       // Para escuchar cambios en una referencia de la base de datos
  remove         // Para eliminar datos de la base de datos
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Importa la configuración de firebase desde un archivo separado (no subir firebaseConfig.js al repo)
import { firebaseConfig } from "./firebaseConfig.js";


/**
 * Inicializa la aplicación de Firebase y obtiene la referencia a la base de datos y a la colección de leads.
 * La configuración se importa desde un archivo local que no debe subirse al repositorio.
 */
const app = initializeApp(firebaseConfig); // Inicializa la app de Firebase
const db = getDatabase(app); // Instancia de la base de datos en tiempo real
const referenceInDB = ref(db, "leads"); // Referencia a la colección 'leads' en la base de datos


// Referencias a los elementos del DOM
/** @type {HTMLButtonElement} */
const saveButton = document.querySelector("#save");
/** @type {HTMLButtonElement} */
const deleteButton = document.querySelector("#delete");
/** @type {HTMLInputElement} */
const newLead = document.querySelector("#new-lead");
/** @type {HTMLUListElement} */
const leadList = document.querySelector("#lead-list");



/**
 * Guarda el lead ingresado en el input en la base de datos de Firebase y limpia el campo.
 * Utiliza la función push para agregar un nuevo valor a la lista 'leads'.
 */
function saveInputLead() {
  push(referenceInDB, newLead.value);
  newLead.value = "";
};



/**
 * Elimina todos los leads guardados en la base de datos y limpia la lista en el DOM.
 * Utiliza la función remove para borrar toda la colección 'leads'.
 */
function deleteAll() {
  remove(referenceInDB);
  leadList.innerHTML = "";
};



/**
 * Renderiza la lista de leads en el DOM.
 * Crea elementos <li> con enlaces para cada lead y los inserta en el ul correspondiente.
 * @param {Array<string>} leads - Array de leads a mostrar.
 */
function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="https://${leads[i]}" target="_blank" title="Seguir vínculo">${leads[i]}</a>
      </li>`;
  }

  leadList.innerHTML = listItems;
};



// Asigna los eventos a los botones para guardar y borrar leads
saveButton.addEventListener("click", saveInputLead);
deleteButton.addEventListener("dblclick", deleteAll);

/**
 * Escucha los cambios en la base de datos de Firebase en tiempo real.
 * Cuando hay cambios en 'leads', actualiza la lista en el DOM.
 */
onValue(referenceInDB, function (snapshot) {
  if (snapshot.exists()) {
    const snapshotValues = snapshot.val();
    render(Object.values(snapshotValues));
  } else {
    leadList.innerHTML = "";
  }
});