/* 
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
*/

let edad1 = 0;
let edad2 = 0;
let edad3 = 0;
let edadMayor = 0;
let nombre1 = "";
let nombre2 = "";
let nombre3 = "";

do {
  edad1 = prompt("Ingrese la primera edad");

  if (edad1 === null) {
    alert("No se ingreso nada");
  } else if (isNaN(edad1)) {
    alert("El valor ingresado no es valido");
  } else if (edad1 < 0 || edad1 > 100) {
    alert("Edad invalida");
  } else {
    break;
  }
} while (true);

do {
  nombre1 = prompt("Ingresa el primer nombre");

  if (nombre1 === null || nombre1 === "") {
    alert("No se ingreso nada");
  } else {
    break;
  }
} while (true);

do {
  edad2 = prompt("Ingrese la segunda edad");

  if (edad2 === null) {
    alert("No se ingreso nada");
  } else if (isNaN(edad2)) {
    alert("El valor ingresado no es valido");
  } else if (edad2 < 0 || edad2 > 100) {
    alert("Edad invalida");
  } else {
    break;
  }
} while (true);

do {
  nombre2 = prompt("Ingresa el segundo nombre");

  if (nombre2 === null || nombre2 === "") {
    alert("No se ingreso nada");
  } else {
    break;
  }
} while (true);

do {
  edad3 = prompt("Ingrese la tercera edad");

  if (edad3 === null) {
    alert("No se ingreso nada");
  } else if (isNaN(edad3)) {
    alert("El valor ingresado no es valido");
  } else if (edad3 < 0 || edad3 > 100) {
    alert("Edad invalida");
  } else {
    break;
  }
} while (true);

do {
  nombre3 = prompt("Ingresa el tercer nombre");

  if (nombre3 === null || nombre3 === "") {
    alert("No se ingreso nada");
  } else {
    break;
  }
} while (true);

edadMayor = Math.max(edad1, edad2, edad3);

if (edadMayor == edad1) {
  alert(`El nombre del mayor es ${nombre1} y tiene ${edad1} años`);
} else if (edadMayor == edad2) {
  alert(`El nombre del mayor es ${nombre2} y tiene ${edad2} años`);
} else if (edadMayor == edad3) {
  alert(`El nombre del mayor es ${nombre3} y tiene ${edad3} años`);
} else {
  alert("Error en la comparacion final");
}
