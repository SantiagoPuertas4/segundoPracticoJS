/* 
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/

let num = 0;

for (i = 0; i < 1000; i++) {
  num = Math.ceil(Math.random() * 99);
  console.log(`Numero aleatorio: ${num}`);
}
