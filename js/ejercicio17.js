/* 
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1

 */

let cadena = "";
let caracter = "";
let num = 0;

do {
  cadena = prompt("Ingresa una cadena de texto");

  if (cadena === null) {
    alert("No se ingreso nada");
  } else {
    break;
  }
} while (true);

cadena = cadena.trim();

if (cadena !== "") {
  for (i = 0; i < cadena.length; i++) {
    caracter = cadena.charAt(i).toLowerCase();
    num++;
    if (
      caracter === "a" ||
      caracter === "e" ||
      caracter === "i" ||
      caracter === "o" ||
      caracter === "u" ||
      caracter === "á" ||
      caracter === "é" ||
      caracter === "í" ||
      caracter === "ó" ||
      caracter === "ú" ||
      caracter === "ü"
    ) {
      break;
    }
  }
  alert(`La vocal '${caracter}' esta en la posicion ${num}`);
} else {
  alert("No se ingreso nada");
}
