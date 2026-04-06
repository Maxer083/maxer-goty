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