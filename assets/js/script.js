/**
 * Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento de
HTML al hacerle click
 * 
se agrega un if para quie cambie dos veces de colores
 */

const ele = document.getElementById("ele1");


ele.addEventListener("click", function pintar(e, color = "green") {
  ele.style.backgroundColor = color;
});




function colores(e, colores = "black") {
    console.log('hola',e)
    const colore = document.getElementById(e);
    colore.style.backgroundColor = colores;
  }