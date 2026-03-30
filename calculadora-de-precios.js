let producto = "Remera de Algodón";
let precioBase = 2500;
let cantidad = prompt("¿Cuántas unidades de " + producto + " quieres llevar?");
let total = precioBase * Number(cantidad);
console.log("--- TICKET DE VENTA ---");
console.log("Producto: " + producto);
console.log("Cantidad: " + cantidad);
console.log("Total a pagar: $" + total);