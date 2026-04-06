//EJERCICIO 8
//Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
//Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

function EJERCICIO8(params){
    let texto = prompt("inserta un texto");
    let str = texto.replaceAll(" ","").toLocaleLowerCase();
    let arrStr = str.split("").reverse().join("");

    if (str == arrStr){
        console.log("el texto es palíndromo");
    }
    else{
        console.log("el texto no es palíndromo");
    }
}