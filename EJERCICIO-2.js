//EJERCICIO 2 
//A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2]; Determinar cual de los dos elementos de texto es mayor Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos 


var valores = [true, 5, false, "hola", "adios",2];

var resultadoTexto = valores[3] > valores[4]
console.log("es",valores[3],"mayor a",valores[4],"?: ", resultadoTexto);

var resultadoTrue = valores[0] || valores[2];
var resultadoFalse = valores[0] && valores[2];
console.log("resultadoVerdadero: ",resultadoTrue);
console.log("resultadoFalso: ",resultadoFalse);

var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multiplicacion = valores[1] * valores[5];
var division = valores[1] / valores[5];
var modulo = valores[1] % valores[5];
console.log("suma: ", suma);
console.log("resta: ", resta);
console.log("multiplicacion: ", multiplicacion);
console.log("division: ", division);
console.log("modulo: ", modulo);
