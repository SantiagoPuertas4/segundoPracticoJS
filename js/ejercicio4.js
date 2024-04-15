/* 
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let suma = 0;
let num1 = 0;
let i = 0;

do {
  suma = parseInt(suma);
  num1 = prompt("Ingrese un numero a sumar");

  if (num1 === null) {
    break;
  } else if (isNaN(num1)) {
    alert("El valor ingresado no es un numero");
  } else {
    num1 = parseInt(num1);
    i++;
    suma = suma + num1;
  }
} while (true);

if (i > 0) {
  alert(`La suma total es ${suma}`);
} else {
  alert("No se ingresaron numeros");
}
