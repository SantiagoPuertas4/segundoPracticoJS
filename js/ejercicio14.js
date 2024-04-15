// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let cadena = "";
let cadenaRes = "";

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
  if (i === 0) {
    cadenaRes = cadena.charAt(i);
  } else {
    cadenaRes += `-${cadena.charAt(i)}`;
  }
}

alert(cadena);
alert(cadenaRes);
