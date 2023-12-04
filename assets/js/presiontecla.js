// Variable global para almacenar el color
let color = "";

let contadorDivs = 1;

// Función para crear un nuevo div con colores adicionales presionando la tecla segun el caso
function crearNuevoDiv(nuevoColor) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("colorDiv");
  nuevoDiv.style.backgroundColor = nuevoColor;

  // Asignar un identificador único al nuevo div por un contador 
  nuevoDiv.id = `nuevoDiv${contadorDivs}`;
  contadorDivs++;

  const container = document.getElementById("container");
  container.appendChild(nuevoDiv);
}


/*
se crear  Función para cambiar el color del div "key"
○ La letra a guardará el color rosado.
○ La letra s guardará el color naranjo.
○ La letra d guardará el color celeste

*/
function cambiarColor(event) {
  const container = document.getElementById("container");
  const keyDiv = document.getElementById("key");

  //estrutura iteratica de los casos para alamcenar los colores
  switch (event.key) {
    case "a":
      color = "pink";
      break;
    case "s":
      color = "orange";
      break;
    case "d":
      color = "lightblue";
      break;

    /**al presionar las teclas q, w o e se agregan colores a los nuevos div
como  morado, gris y café respectivamente. */
    case "q":
      crearNuevoDiv("purple");
      break;
    case "w":
      crearNuevoDiv("gray");
      break;
    case "e":
      crearNuevoDiv("brown");
      break;
    default:
      // No hacemos nada para otras teclas
      return;
  }

  keyDiv.style.backgroundColor = color;
}

// Escuchar eventos de teclado
document.addEventListener("keydown", cambiarColor);
