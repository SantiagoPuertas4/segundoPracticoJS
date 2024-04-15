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

for (i = 0; i < cadena.length; i++) {
  caracter = cadena.charAt(i);
  caracter = caracter.toLowerCase();
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    num = num + 1;
  }
}

alert(`La cantidad de vocales que tiene el texto es ${num}`);
