// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

let num = 0;

for (let i = 0; i < 30; i++) {
  num++;
  for (let j = 0; j < num; j++) {
    document.write(`${num}`);
  }
  document.write(`<br />`);
}
