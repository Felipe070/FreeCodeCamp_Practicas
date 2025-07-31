/* 
1 - Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

2 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

3 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

4 - Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

5 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

6 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

7 - Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

8 - Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

9 - Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

10 - Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

11 - Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

12 - Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

13 - Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
 */


// Ejercicio 1

let bienvenida = "¡Bienvenido!";
console.log(bienvenida);

// Ejercicio 2

let nombre = "Felipe";
console.log(`Hola, ${nombre}!`);

// Ejercicio 3

alert(`Hola, ${nombre}!`);

// Ejercicio 4

let lenguajeFav = prompt(
  "¿Cuál es el lenguaje de programación que más te gusta?"
);
console.log(`Tu lenguaje favorito es: ${lenguajeFav}`);

// Ejercicio 5 y 6

let valor1 = 3;
let valor2 = 10;
let suma = valor1 + valor2;
let resta = valor1 - valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${suma}.`);
console.log(`La resta de ${valor1} y ${valor2} es igual a ${resta}.`);

//Ejercicio 7

let edad = prompt(`${nombre}, ¿cuántos años tienes?`);
console.log(
  edad > 18
    ? "Eres mayor de edad, puedes pasar"
    : "Eres menor de edad, no puedes pasar"
);

// Ejercicio 8

let num = parseInt(prompt("Introduce un número: "));
alert(
  `${
    num == 0
      ? "El número es 0"
      : num > 0
      ? "El número es positivo"
      : "El número es negativo"
  }`
);

// Ejercicio 9

let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Ejercicio 10

let nota = Math.floor(Math.random() * 10) + 1;
console.log(`Tu nota es: ${nota}`);
console.log(`${nota >= 7 ? "¡Aprobaste!" : "Reprobaste, lo siento."}`);

//Ejercicio 11

console.log(`Número random: ${Math.random()}`);

//Ejercicio 12

console.log(
  `Número random entre 1 y 10: ${Math.floor(Math.random() * 10) + 1}`
);

// Ejercicio 13

console.log(
  `Número random entre 1 y 1000: ${Math.floor(Math.random() * 1000) + 1}`
);
