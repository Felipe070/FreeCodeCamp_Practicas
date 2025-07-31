/*
1 - Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

2 - Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

3 - Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

4 - Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

5 - Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
 */


// Ejercicio 1

let diaUser = prompt("¿Qué día de la semana es hoy?");

if (diaUser == "Sábado" || diaUser == "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    !alert("¡Buena semana!");
}

// Ejercicio 2

let positivoNegativo = prompt("Ingrese un número (pude ser positivo o negativo):");

if (positivoNegativo > 0) {
    alert("El número es positivo");
} else if (positivoNegativo < 0) {
    alert("El número es negativo");
} else {
    alert("El número es cero");
}

// Ejercicio 3

let puntos = 200;

if (puntos >= 100) {
    alert(`¡Felicidades, has ganado! Tu puntuación es de: ${puntos} puntos.`);
}   else {
    alert("Intentalo nuevamente para ganar.");
}

// Ejercicio 4

let saldoUser = 3500;
alert(`El saldo disponible en tu cuenta es de ${saldoUser} pesos.`);

// Ejercicio 5

let nombre = prompt("Ingrese un nombre por faovor:");
alert(`Bienvenido ${nombre}`);