// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let fila = 0;
let columna = 0;
let num = 0;
let tamanio = 0;

do {
  fila = prompt("Indique la cantidad de filas de la tabla");

  if (fila === null) {
    alert("No se ingreso nada");
  } else if (isNaN(fila)) {
    alert("El valor ingresado no es valido");
  } else {
    break;
  }
} while (true);

do {
  columna = prompt("Indique la cantidad de columnas de la tabla");

  if (columna === null) {
    alert("No se ingreso nada");
  } else if (isNaN(columna)) {
    alert("El valor ingresado no es valido");
  } else {
    break;
  }
} while (true);

fila = parseInt(fila);
columna = parseInt(columna);
num = fila * columna;

if (num > 10 && num < 100) {
  tamanio = 1;
} else if (num >= 100 && num < 1000) {
  tamanio = 2;
} else if (num >= 1000) {
  tamanio = 3;
}

switch (tamanio) {
  case 0:
    for (k = 0; k < columna; k++) {
      document.write(" --- ");
    }
    break;
  case 1:
    for (k = 0; k < columna; k++) {
      document.write(" ----- ");
    }
    break;
  case 2:
    for (k = 0; k < columna; k++) {
      document.write(" ------- ");
    }
    break;
  case 3:
    for (k = 0; k < columna; k++) {
      document.write(" -------- ");
    }
    break;
}
document.write(`<br />`);

for (i = 0; i < fila * 2; i++) {
  if (i % 2 != 0) {
    switch (tamanio) {
      case 0:
        for (k = 0; k < columna; k++) {
          document.write(" --- ");
        }
        break;
      case 1:
        for (k = 0; k < columna; k++) {
          document.write(" ----- ");
        }
        break;
      case 2:
        for (k = 0; k < columna; k++) {
          document.write(" ------- ");
        }
        break;
      case 3:
        for (k = 0; k < columna; k++) {
          document.write(" -------- ");
        }
        break;
    }
  } else {
    for (k = 0; k < columna; k++) {
      document.write(`| ${num} |`);
      num--;
    }
  }
  document.write(`<br />`);
}
