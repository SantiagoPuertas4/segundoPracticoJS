/* 
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let num1 = 0;
let num2 = 0;
let i = 0;

do {
  num1 = parseInt(num1);
  num2 = prompt("Ingrese un numero a sumar");

  if (num2 === null) {
    break;
  } else if (isNaN(num2)) {
    alert("El valor ingresado no es un numero");
  } else {
    num2 = parseInt(num2);
    i++;
    num1 = num1 + num2;
  }
} while (true);

if (i > 0) {
  alert(`La suma total es ${num1}`);
} else {
  alert("No se ingresaron numeros");
}
