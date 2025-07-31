/*
    1 - Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
    2 - Crea una función que calcule el valor del factorial de un número pasado como parámetro.
    3 - Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
    4 - Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
    5 - Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
    6 - Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

// Ejercicio 1: Calcular el índice de masa corporal (IMC)

function indiceMasaCorporal(altura, peso) {
  return console.log(
    `Su índice de masa corporal es de: ${(peso / altura ** 2).toFixed(2)}`
  );
}

indiceMasaCorporal(1.73, 110);

// Ejercicio 2: Calcular el valor del factorial de un número

function calcularFactorial(num) {
  if (num == 0) {
    return 1;
  } else if (num > 0) {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  } else {
    let resultadoNegativo = 1;
    for (let i = -2; i >= num; i--) {
      resultadoNegativo *= -i;
    }
    return -resultadoNegativo;
  }
}

console.log(calcularFactorial(-10));

// Ejercicio 3: Convertir dólares a reales

function dorlaresAReales(montoDolares, cotizacionDolar) {
    return montoDolares * cotizacionDolar;
}

console.log(`Tus dolares valen ${dorlaresAReales(50,4.80)} Reales.`);

// Ejercicio 4: Área y perímetro de una sala rectangular

function areaPerimetroSalaRectangular(altura, anchura) {
    return alert(`El rectangulo tiene un área de: ${altura * anchura} m² y un perímetro de: ${(altura + anchura) * 2} m.`);
}

areaPerimetroSalaRectangular(10, 5);

//Ejercicio 5: Área y perímetro de una sala circular

function areaPerimetroSalaCircular(radio) {
    return alert(`El círculo tiene un área de ${3.14 * radio**2} m² y un perímetro de ${((2*radio)*3.14).toFixed(2)} m.`);

}

areaPerimetroSalaCircular(5);

// Ejercicio 6: Tabla de multiplicar

function tablaDeMultiplicar(numTabla) {
 let aux = 0;
    for (let i = 1; i <= 10; i++){
        aux = numTabla * i;
        console.log(`${numTabla} x ${i} = ${aux}`);
    }
}

tablaDeMultiplicar(23);