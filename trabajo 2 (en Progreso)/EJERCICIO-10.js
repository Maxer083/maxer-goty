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
