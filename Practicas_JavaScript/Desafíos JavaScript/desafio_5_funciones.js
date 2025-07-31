/*
1- Crear una función que muestre "¡Hola, mundo!" en la consola.
2- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4- Crear una función que reciba tres números como parámetros y devuelva su promedio.
5- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/ 

// Ejercicio 1

function holaMundoConsola(){
    console.log("¡Hola, mundo!");
} 

// Ejercicio 2

function nombreEnConsola(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
nombreEnConsola("Felipe");

//Ejercicio 3

function dobleNum (num){
    return num * 2;
}
console.log(dobleNum(5)); 

// Ejercicio 4

function promedioTresNum(num1,num2,num3){
 return (num1 + num2 + num3) / 3;
}
console.log(promedioTresNum(3, 6, 9));

// Ejercicio 5

function mayorDeDos(num1, num2){

    num1 == num2 ? 
    console.log(`${num1} y ${num2} son iguales.`): 
    num1 > num2 ?
        console.log(`${num1} es mayor que ${num2}.`):
        console.log(`${num2} es mayor que ${num1}.`);
}

mayorDeDos(9, 10);

// Ejercicio 6

function cuadradoDe(num) {
    return num * num;
}

console.log(cuadradoDe(55));