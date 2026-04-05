// Ejercicio 1: Calculadora de IVA
let precio = 200
let iva = 21

let precioFinal = precio + (iva*precio/100)

console.log("\nEjercicio 1: Calculadora de IVA")
console.log("Precio: " + precio + " € ")
console.log("IVA: " + iva + " % ")
console.log("El precio final es: " + precioFinal + " € ")

//Ejercicio 2: Área y Perímetro de un Cuadrado
let lado = 40
let area = lado * lado
let perimetro = lado * 4

console.log("\nEjercicio 2: Área y Perímetro de un Cuadrado")
console.log("Lado: " + lado + " cm ")
console.log("Área: " + area + " cm² ")
console.log("Perímetro: " + perimetro + " cm ")

//Ejercicio 3: Interactividad con el usuario

/*let nombre = prompt("\n¿Escribe tu nombre?")

console.log("\nEjercicio 3: Interactividad con el usuario")
console.log("Hola" + nombre) */

//Ejercicio 9: Intercambio de variables
console.log("\nEjercicio 9: Intercambio de variables")
let varUno = 10;
let varDos = 30;
let aux;

console.log("varUno vale " + varUno + ", varDos vale " + varDos)

aux = varUno
varUno = varDos
varDos = aux

console.log("varUno vale " + varUno + ", varDos vale " + varDos)

//Ejercicio 10: Numero par y numero impar
let numero = 56
let resultado = numero % 2 == 0 ? true : false
console.log("\nEjercicio 10: Numero par y numero impar")
console.log("¿Es par?: " + resultado)

