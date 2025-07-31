/*
1 - Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
2 - Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
3 - Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador.
4 - Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/ 

//Ejercicio 1

let contadorCreciente = 1;

while (contadorCreciente <= 10) {
  console.log(`Contador: ${contadorCreciente}`);
  contadorCreciente++;
}

//Ejercicio 2

let contadorDecreciente = 10;

while (contadorDecreciente >= 1) {
  console.log(`Contador: ${contadorDecreciente}`);
  contadorDecreciente--;
}

//Ejercicio 3

let numUser = parseInt(prompt("Introduce un número:"));
let contador = 0;

while (contador <= numUser) {
  console.log(`Cuenta progresiva: ${contador}`);
  contador++;
}

//Ejercicio 4

let numUser2 = prompt("Introduce un número:");
while (numUser2 >= 0) {
  console.log(`Cuenta regresiva: ${numUser2}`);
  numUser2--;
}
