/*
1 - Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".

2 - Declara una variable llamada nombre y asígnale el valor "Lua".

3 - Crea una variable llamada edady asígnale el valor 25.

4 - Establece una variable numeroDeVentas y asígnale el valor 50.

5 - Establece una variable saldoDisponible y asígnale el valor 1000.

6 - Muestra una alerta con el texto "¡Error! Completa todos los campos".

7 - Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .

8- Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.

9 - Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.

10 - Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección
*/


let nombre = "Lua"; // Ejercicio 2
let edad = 25; // Ejercicio 3
let numeroDeVentas = 50; // Ejercicio 4
let saldoDisponible  = 1000; // Ejercicio 5
let mensajeDeError = "¡Error! Completa todos los campos"; // Ejercicio 7


alert("¡Bienvenida y bienvenido a nuestro sitio web!"); // Ejercicio 1
nombre = prompt("Introduce tu nombre:"); // Ejercicio 8
edad = prompt("Introduce tu edad:"); // Ejercicio 9

if(edad > 18){ // Ejercicio 10
    alert("¡Hola " + nombre + "! Puedes obtener tu licencia de conducir.");
} else {
    alert(mensajeDeError); // Ejercicio 6
}

