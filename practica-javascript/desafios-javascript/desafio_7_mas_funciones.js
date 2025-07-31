/*
1 - Crea una lista vacía llamada "listaGenerica".
2 - Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3 - Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4 - Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5 - Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6 - Crea una función que calcule el promedio de los elementos en una lista de números.
7 - Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8 - Crea una función que devuelva la suma de todos los elementos en una lista.
9 - Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10 - Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11 - Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

// Ejercicio 1

let listaGenerica = [];

// Ejercicio 2

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// Ejercicio 3

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// Ejercicio 4

function mostrarLista() {
  return console.log(lenguagesDeProgramacion);
}

mostrarLista();

// Ejercicio 5

function mostrarListaInversa() {
  return console.log(lenguagesDeProgramacion.reverse());
}

mostrarListaInversa();

/*

el método "reverse()" destruye la lista original, 
por lo que si vuelvo a llamar al método "mostrarLista()", 
va a mostrar la lista inversa

*/

// Ejercicio 6

let listaNums = [-999, 12999, 1000, -2000, -3000];

function promedioListaNums() {
  let aux = 0;
  for (let i = 0; i < listaNums.length; i++) {
    aux += listaNums[i];
    console.log(aux);
  }
  return aux / listaNums.length;
}

console.log(promedioListaNums());

// Ejercicio 7

function encontrarMaxMin() {
  let max = listaNums[0];
  let min = listaNums[0];
  for (let i = 0; i < listaNums.length; i++) {
    if (listaNums[i] >= max) {
      max = listaNums[i];
    }
    if (listaNums[i] <= min) {
      min = listaNums[i];
    }
  }
  return `El menor número del array es: ${min} y el mayor es ${max}`;
}

console.log(encontrarMaxMin());

// Ejercicio 7.1

function encontrarMaxMinFacil(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return `El número más alto de la lista es ${max} y el menor es ${min}`;
}

console.log(encontrarMaxMinFacil(listaNums));

// Ejercicio 8

function sumaElementosLista(array) {
  let aux = 0;
  for (let i = 0; i < array.length; i++) {
    aux += array[i];
  }
  return aux;
}

console.log(sumaElementosLista(listaNums));

// Ejercicio 9

function encontrarElementoLista(array, elemento) {
  return `${elemento} ${
    array.indexOf(elemento) == -1
      ? `no se encuentra en el array`
      : `se encuentra en la posición:[${array.indexOf(elemento)}]`
  }`;
}

console.log(encontrarElementoLista(listaNums, -999));

// Ejercicio 10

let lista1 = [4, 7, 2, 9, 8];
let lista2 = [1, -5, 6, 3, 2];

function listasSumadas(array1, array2) {
  let sumaListas = [];
  if (array1.length == array2.length) {
    for (let i = 0; i < array1.length; i++) {
      sumaListas[i] = array1[i] + array2[i];
    }
  } else {
    sumaListas = "Los arrays no son del mismo tamaño";
  }
  return sumaListas;
}

console.log(listasSumadas(lista1, lista2));

// Ejercicio 11

function cuadradoDeCadaNum(array) {
  let listaAlCuadrado = [];
  for (let i = 0; i < array.length; i++) {
    listaAlCuadrado[i] = array[i] ** 2;
  }
  return listaAlCuadrado;
}

console.log(cuadradoDeCadaNum(lista1));
console.log(cuadradoDeCadaNum(lista2));
