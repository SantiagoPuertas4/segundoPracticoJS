// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let num = 0;
let max = 0;
let piramide = 0;

piramide = 0;

max = prompt("Indique el tamaño de la piramide inversa(2 a 50)");

if (max === null) {
  alert("No se ingreso nada");
} else if (isNaN(max)) {
  alert("El valor ingresado no es valido");
} else if (max > 50 || max < 2) {
  alert("Valor fuera de rango");
} else {
  piramide = 1;
}

if (piramide === 1) {
  num = max;

  for (let i = max; i > 0; i--) {
    for (let j = 0; j < num; j++) {
      document.write(`${num}`);
    }
    num--;
    document.write(`<br />`);
  }
}
