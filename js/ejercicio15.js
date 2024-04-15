//15- Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = "hola que tal";
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

for (i = 0; i < cadena.length; i++) {
  caracter = cadena.charAt(i).toLowerCase;
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
    num++;
  }
}

alert(`La cantidad de vocales que tiene el texto es ${num}`);
