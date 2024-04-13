// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let num = 0;
let max = 0;
let piramide = 0;

max = prompt("Indique el tamaño de la piramide(2 a 50)");

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
  for (let i = 0; i < max; i++) {
    num++;
    for (let j = 0; j < num; j++) {
      document.write(`${num}`);
    }
    document.write(`<br />`);
  }
}
