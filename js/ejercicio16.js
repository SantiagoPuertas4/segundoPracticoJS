//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

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

if (cadena !== "") {
  for (i = 0; i < cadena.length + 1; i++) {
    cadenaRes += `${cadena.charAt(cadena.length - i)}`;
  }

  alert(cadena);
  alert(cadenaRes);
} else {
  alert("No se ingreso nada");
}
