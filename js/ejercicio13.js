//13- Realiza un script que pida un texto y lo muestre en mayúsculas.

let cadena = "";
let cadenaMayus = "";

do {
  cadena = prompt("Ingresa una cadena de texto");

  if (cadena === null) {
    alert("No se ingreso nada");
  } else {
    break;
  }
} while (true);

cadena = cadena.trim();

cadenaMayus = cadena.toUpperCase();

alert(cadena);
alert(cadenaMayus);
