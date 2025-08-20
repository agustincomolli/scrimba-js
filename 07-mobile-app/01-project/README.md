# Leads Tracker - Extensión de Chrome

Este proyecto es una extensión de Chrome que permite guardar y gestionar leads (enlaces o textos) de manera sencilla. A continuación se explica la función de cada archivo y la estructura general del proyecto.

## Archivos principales

- **index.html**: Archivo principal de la extensión. Contiene la estructura HTML, los botones para guardar y borrar leads, el campo de entrada y la lista donde se muestran los leads guardados. Incluye comentarios explicativos en el código.

- **styles.css**: Hoja de estilos que define la apariencia de la extensión. Estiliza el cuerpo, los botones, el campo de entrada y la lista de leads. Incluye comentarios explicativos en el código.

- **script.js**: Archivo JavaScript que contiene toda la lógica de la extensión. Permite guardar leads manualmente, guardar la URL de la pestaña activa (requiere permisos de Chrome), borrar todos los leads y renderizar la lista. Incluye docstrings y comentarios en español para facilitar la comprensión.

- **manifest.json**: Archivo de configuración requerido por Chrome para definir la extensión. Especifica el nombre, versión, archivos principales, icono y permisos necesarios (por ejemplo, acceso a las pestañas). **Nota:** El formato JSON no permite comentarios, por lo que la explicación de este archivo se encuentra aquí:

  - `manifest_version`: Versión del esquema de manifiesto de Chrome (debe ser 3 para extensiones modernas).
  - `version`: Versión de la extensión.
  - `name`: Nombre visible de la extensión.
  - `action.default_popup`: Archivo HTML que se muestra como ventana emergente.
  - `action.default_icon`: Icono de la extensión.
  - `permissions`: Permisos requeridos, en este caso acceso a las pestañas (`tabs`).

## Funcionamiento general

1. El usuario puede ingresar un lead manualmente y guardarlo.
2. Puede guardar la URL de la pestaña activa con un botón (solo en Chrome con permisos).
3. Puede borrar todos los leads guardados haciendo doble clic en el botón correspondiente.
4. Los leads se almacenan en `localStorage` y se muestran en una lista interactiva.

---

Si tienes dudas sobre algún archivo o funcionalidad, revisa los comentarios en el código fuente o consulta este README.
