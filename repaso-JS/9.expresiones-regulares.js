// Expresiones regulares
const texto = "Hola Mundo";

// Test → verifica si una cadena cumple con un patrón
const patron = /Mundo/;
console.log(patron.test(texto)); // true

// Match → devuelve un array con todas las coincidencias
const coincidencias = texto.match(/o/g);
console.log(coincidencias); // ["o", "o"]

// Replace → reemplaza las coincidencias por otra cadena
console.log(texto.replace(/o/g, "O")); // HOla MundO

// Search → devuelve la posición de la primera coincidencia
console.log(texto.search(/Mundo/)); // 5

// Split → divide el string en un array de subcadenas basado en un patrón
const palabras = texto.split(/ /);
console.log(palabras); // ["Hola", "Mundo"]

// Ejemplo: Validar un número de teléfono en formato (XXX) XXX-XXXX
const telefono = "(123) 456-7890";
const patronTelefono = /^\(\d{3}\) \d{3}-\d{4}$/;
if (patronTelefono.test(telefono)) {
    console.log("Número de teléfono válido");
} else {
    console.log("Número de teléfono no válido");
}

// Ejemplo: Validar un correo electrónico
const email = "usuario@dominio.com";
const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (patronEmail.test(email)) {
    console.log("Correo electrónico válido");
} else {
    console.log("Correo electrónico no válido");
}

// Limpieza de datos: eliminar caracteres no deseados
const textoConRuido = "   Hola Mundo!   ";
const textoLimpio = textoConRuido.replace(/[^a-zA-Z]/g, " ").trim();
console.log(textoLimpio); // "Hola Mundo"
