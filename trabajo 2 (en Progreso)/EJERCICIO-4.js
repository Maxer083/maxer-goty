//EJERCICIO 4
//El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
//El array de letras es:
//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
function EJERCICIO4(params) {
    var numeroDNI = parseInt(prompt("Introduce tu número de DNI (sin letra):"));
var letraUsuario = prompt("Introduce la letra de tu DNI (en mayúscula):");

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("ese número no es válido");
} else {

    var restoDLD = numeroDNI % 23;  //DLD (De La Division)
    var letraCorrecta = letras[restoDLD];

    if (letraCorrecta !== letraUsuario.toUpperCase()) {
        alert("La letra que ha indicado no es correcta");
    } else {
        alert("El número y la letra de DNI son correctos");
    }
}
}
