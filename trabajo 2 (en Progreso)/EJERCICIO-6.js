//EJERCICIO 6
//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function EJERCICIO6(params) {
let n = prompt("inserta un numero");
if (isNaN(n)){
    alert("eso no es un numero");
}

else if (n % 2 === 0) {
    document.writeln("El número ", n , " es par");
}
else{
    document.writeln("El número ", n , " es impar");
}
}