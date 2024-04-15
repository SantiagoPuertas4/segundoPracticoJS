//15- Realiza un script que cuente el número de vocales que tiene un texto.

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
    caracter = cadena.charAt(i);
    caracter = caracter.toLowerCase();
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
      num = num + 1;
    }
  }

  if (num === 0) {
    alert("El texto ingresado no tiene vocales");
  } else if (num === 1) {
    alert("El texto ingresado tiene 1 vocal");
  } else {
    alert(`El texto ingresado tiene ${num} vocales`);
  }
} else {
  alert("No se ingreso nada");
}
