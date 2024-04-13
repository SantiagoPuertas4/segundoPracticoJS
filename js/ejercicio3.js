// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let texto = "";
let cadena = "";
let i = 0;

do {
  cadena = prompt("Ingrese una cadena de texto");
  if (cadena !== null && cadena !== "") {
    i++;
    if (i > 1) {
      texto += `-${cadena}`;
    } else {
      texto = texto + cadena;
    }
  }
} while (confirm("Desea seguir ingresando cadenas de texto?"));

if (i > 0) {
  alert(texto);
} else {
  alert("No se ingreso texto");
}
