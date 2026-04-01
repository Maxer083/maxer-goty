//EJERCICIO 3 
//Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta: 

function EJERCICIO3(params) {
    var num1 = 5; 
var num2 = 8; 
if(num1 <= num2) { 
console.log("5 no es mayor que 8"); 
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

