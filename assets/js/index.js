/**
 * Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento de
HTML al hacerle click
 * 
se agrega un if para quie cambie dos veces de colores
 */

const ele = document.getElementById("ele1");
let colorToggle = true;

ele.addEventListener("click", function pintar() {
  if (colorToggle) {
    ele.style.backgroundColor = "yellow";
  } else {
    ele.style.backgroundColor = "lightblue";
  }

  colorToggle = !colorToggle;
});
