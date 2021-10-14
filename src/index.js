import moverAuto from "./App";
const form = document.querySelector("#Controlador-form");
const posicionInicial = document.querySelector("#posicion-inicial");
const direcciones = document.querySelector("#instrucciones");
const div = document.querySelector("#pos-final");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var posIni = String(posicionInicial.value);
  var direcc = String(direcciones.value);
  
  div.innerHTML = "<p>" + moverAuto( String( posIni+"/"+direcc)) + "</p>";
});
