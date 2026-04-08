//EJERCICIO 1 
//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log(). 
function EJERCICIO1(params) {
    let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

console.log(meses)
}


//EJERCICIO 2 
//A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2]; Determinar cual de los dos elementos de texto es mayor Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos 

function EJERCICIO2(params) {
    let valores = [true, 5, false, "hola", "adios",2];

let resultadoTexto = valores[3] > valores[4]
console.log("es",valores[3],"mayor a",valores[4],"?: ", resultadoTexto);

let resultadoTrue = valores[0] || valores[2];
let resultadoFalse = valores[0] && valores[2];
console.log("resultadoVerdadero: ",resultadoTrue);
console.log("resultadoFalso: ",resultadoFalse);

let suma = valores[1] + valores[5];
let resta = valores[1] - valores[5];
let multiplicacion = valores[1] * valores[5];
let division = valores[1] / valores[5];
let modulo = valores[1] % valores[5];
console.log("suma: ", suma);
console.log("resta: ", resta);
console.log("multiplicacion: ", multiplicacion);
console.log("division: ", division);
console.log("modulo: ", modulo);
}


//EJERCICIO 3 
//Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta: 

function EJERCICIO3(params) {
let num1 = 5; 
let num2 = 8; 
if(num1 <= num2) { 
console.log("5 es menor que 8"); 
} 
if(num2 >= 0) { 
console.log("8 es positivo"); 
} 
if(num1 < 0 || num1 !== 0) { 
console.log("5 es negativo o distinto de cero"); 
} 
if(num1++ < num2) { 
console.log("Incrementar en 1 unidad el valor de 5 no lo hace mayor o igual que 8"); 
} 
}


//EJERCICIO 4
//El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
//El array de letras es:
//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
function EJERCICIO4(params) {
    let numeroDNI = parseInt(prompt("Introduce tu número de DNI (sin letra):"));
let letraUsuario = prompt("Introduce la letra de tu DNI (en mayúscula):");

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("ese número no es válido");
} else {

    let restoDLD = numeroDNI % 23;  //DLD (De La Division)
    let letraCorrecta = letras[restoDLD];

    if (letraCorrecta !== letraUsuario.toUpperCase()) {
        alert("La letra que ha indicado no es correcta");
    } else {
        alert("El número y la letra de DNI son correctos");
    }
}
}


//EJERCICIO 5
//El factorial de un número entero n es una operación matemática que consiste en multiplicartodos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120 
//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
function EJERCICIO5(params) {
let n = prompt("inserta un numero");
let resultado = 1;

if (isNaN(n)){
    console.log("eso no es un numero");
}

else{
    
    for (var i = 1; i <= n; i++){
    resultado = resultado * i;
}
    console.log("El factorial de ", n , " es: ", resultado);
}
}


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


//EJERCICIO 7
//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function EJERCICIO7(params) {
    let texto = prompt("inserta un texto");
    if (!isNaN(texto)){
        console.log("solo letras, sin numeros")
    }
    else if (texto === texto.toLowerCase()){
        console.log("este texto tiene solo minusculas");
    }
    else if(texto === texto.toUpperCase()){
        console.log("este texto tiene solo mayusculas");
    }
    else {
        console.log("este texto tiene minusculas y mayusculas");
    }
}


//EJERCICIO 8
//Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
//Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

function EJERCICIO8(params){
    let texto = prompt("inserta un texto");
    let str = texto.replaceAll(" ","").toLowerCase();
    let arrStr = str.split("").reverse().join("");

    if (str == arrStr){
        console.log("el texto es palíndromo");
    }
    else{
        console.log("el texto no es palíndromo");
    }
}


//EJERCICIO 9
//Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
//Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
//Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
//Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
//Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

//AUN NO SE HACE

function EJERCICIO9(params) {
    
}


//EJERCICIO 10
//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.

function EJERCICIO10(params) {
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(var i = 0; i <= 36000; i++){
        let dado1 = Math.floor(Math.random() *  6) + 1;
        let dado2 = Math.floor(Math.random() *  6) + 1;
        let SDLD = dado1 + dado2; //suma de los dados
        arr[SDLD] = arr[SDLD] + 1
    }

    for(var i = 2; i <= 12; i++){
        console.log("el numero", i,"salio: ", arr[i],"veces");
    }
}

