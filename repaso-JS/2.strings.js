const texto = "Hola Mundo";

//length → longitud del string
console.log(texto.length); // 10

//toUpperCase() → convierte a mayúsculas / toLowerCase() → convierte a minúsculas
console.log(texto.toUpperCase()); // HOLA MUNDO
console.log(texto.toLowerCase()); // hola mundo

//includes() → verifica si el string contiene una subcadena
console.log(texto.includes("Mundo")); // true
console.log(texto.includes("mundo")); // false

//indexOf() → devuelve la posición de la primera aparición de una subcadena
console.log(texto.indexOf("Mundo")); // 5
console.log(texto.indexOf("mundo")); // -1 (no encontrado)

//slice() → extrae una parte del string
console.log(texto.slice(0, 4)); // Hola
console.log(texto.slice(5)); // Mundo

//replace() → reemplaza una subcadena por otra
console.log(texto.replace("Mundo", "Amigo")); // Hola Amigo

//trim() → elimina espacios en blanco al inicio y al final
const textoConEspacios = "   Hola Mundo   ";
console.log(textoConEspacios.trim()); // "Hola Mundo"

//split() → divide el string en un array de subcadenas
const palabras = texto.split(" ");
console.log(palabras); // ["Hola", "Mundo"]

//startsWith() → verifica si el string comienza con una subcadena
console.log(texto.startsWith("Hola")); // true
console.log(texto.startsWith("Mundo")); // false

//endsWith() → verifica si el string termina con una subcadena
console.log(texto.endsWith("Mundo")); // true
console.log(texto.endsWith("Hola")); // false

//repeat() → repite el string un número específico de veces
console.log(texto.repeat(2)); // Hola MundoHola Mundo

//padStart() y padEnd() → añade caracteres al inicio o al final para alcanzar una longitud deseada
console.log(texto.padStart(15, "*")); // *****Hola Mundo
console.log(texto.padEnd(15, "-")); // Hola Mundo-----

//Ejemplo con expresiones regulares en replace()
const textoConNumeros = "El precio es 50 USD";
console.log(textoConNumeros.replace(/\d+/g, "100")); // El precio es 100 USD

//Ejemplo de manejo de cadenas vacías o valores null/undefined
const cadenaVacia = "";
console.log(cadenaVacia.length); // 0
console.log(cadenaVacia || "Valor por defecto"); // Valor por defecto

const valorNulo = null;
console.log(valorNulo ? valorNulo.toUpperCase() : "Valor nulo"); // Valor nulo

//Combinación de métodos: trim() y split()
const textoLargo = "   Aprende JavaScript paso a paso   ";
const palabrasLimpias = textoLargo.trim().split(" ");
console.log(palabrasLimpias); // ["Aprende", "JavaScript", "paso", "a", "paso"]

//Validar un correo electrónico simple usando includes() y indexOf()
const email = "usuario@dominio.com";
if (email.includes("@") && email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@")) {
    console.log("Correo electrónico válido");
} else {
    console.log("Correo electrónico no válido");
}

//Validar fecha en formato "DD/MM/YYYY" usando split() y parseInt()
const fecha = "25/12/1899";
const partesFecha = fecha.split("/");
const dia = parseInt(partesFecha[0]);
const mes = parseInt(partesFecha[1]);
const año = parseInt(partesFecha[2]);
if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && año > 1900) {
    console.log("Fecha válida");
} else {
    console.log("Fecha no válida");
}

// Validar url simple usando startsWith() y endsWith()
const url = "https://www.mastercard.com";
if (url.startsWith("https://") && url.endsWith(".com")) {
    console.log("URL válida");
} else {
    console.log("URL no válida");
}