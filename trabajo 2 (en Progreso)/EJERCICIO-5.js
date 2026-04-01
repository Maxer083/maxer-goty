//EJERCICIO 5
//El factorial de un número entero n es una operación matemática que consiste en multiplicartodos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120 
//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
function EJERCICIO5(params) {
    var n = 5;
var resultado = 1;

for (var i = 1; i <= 5; i++){
    resultado = resultado * i;
}

console.log("El factorial de " + n + " es: " + resultado);
}
