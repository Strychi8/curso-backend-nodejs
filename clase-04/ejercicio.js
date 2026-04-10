class User {
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    login(inputEmail, password){
        return this.email === inputEmail && this.password === password
        ? "Login exitoso"
        : "Email o contraseña incorrectos"
    }
}

const user = new User("Carlos", "carlos@gmail.com", "sicilia")

//console.log(user)
//console.log(user.login("carlos@gmail.com","cicilia"))

console.log("----------------------------------------------")
console.log("----------------- Ejercicio 1 ----------------")
console.log("----------------------------------------------\n")

/* 1. Crea un array con 10 objetos, donde cada objeto represente un automóvil con la
siguiente información: Marca, Modelo, Año y Color */

const automoviles = [
    {id: 1, marca: "Toyota", modelo: "Corolla", anio: 2010, color: "Gris"},
    {id: 2, marca: "Ford", modelo: "Focus", anio: 2020, color: "Blanco"},
    {id: 3, marca: "Chevrolet", modelo: "Cruze", anio: 2018, color: "Negro"},
    {id: 4, marca: "Honda", modelo: "Civic", anio: 2022, color: "Azul"},
    {id: 5, marca: "Volkswagen", modelo: "Golf", anio: 2015, color: "Rojo"},
    {id: 6, marca: "Peugeot", modelo: "208", anio: 2021, color: "Blanco"},
    {id: 7, marca: "Renault", modelo: "Clio", anio: 2012, color: "Verde"},
    {id: 8, marca: "Nissan", modelo: "Sentra", anio: 2019, color: "Plata"},
    {id: 9, marca: "Hyundai", modelo: "Tucson", anio: 2023, color: "Negro"},
    {id: 10, marca: "Renault", modelo: "Kangoo", anio: 2010, color: "Rojo"}
]

/* 2. Usa un método de array para recorrer la lista e imprime por consola todos los datos
de los automóviles cuyo año sea mayor a 2018.*/

// Creamos nuevo array con el filtro anio > 2018
const autosFiltrados = automoviles.filter(auto => auto.anio > 2018)

// Recorremos el array creado e imprimimos por consola los datos
autosFiltrados.forEach((auto) => {
    console.log(`ID: ${auto.id}\nMarca: ${auto.marca}\nModelo: ${auto.modelo}\nAnio: ${auto.anio}\nColor: ${auto.color}\n`)
})

console.log("----------------------------------------------")
console.log("----------------- Ejercicio 2 ----------------")
console.log("----------------------------------------------\n")

/* 1. Crea una función que recorra el array de automóviles.
2. Usa destructuring dentro de la función para obtener el color de cada automóvil.
3. La función debe aceptar un color como parámetro y devolver por consola cuántos
automóviles tienen ese color.*/
const contarAutosPorColor = (colorAuto) => {
    const filtroPorColor = automoviles.filter(({ color }) => color === colorAuto)

    if (filtroPorColor.length > 1){
        console.log(`Hay ${filtroPorColor.length} autos con el color ${colorAuto}\n`)
    } else if (filtroPorColor.length == 1){
        console.table(`Hay ${filtroPorColor.length} auto con el color ${colorAuto}`)
    } else {
        console.table(`No hay autos con el color ${colorAuto}`)
    } 
}

contarAutosPorColor("Violeta")

/*console.log("----------------------------------------------")
console.log("----------------- Ejercicio 3 ----------------")
console.log("----------------------------------------------\n")

const estudiantes = [
    {nombre: "Juan", edad: 15, grado: "3ro", calificaciones: [8, 6, 7]},
    {nombre: "Pablo", edad: 14, grado: "2do", calificaciones: [4, 6, 4]},
    {nombre: "Micaela", edad: 17, grado: "5to", calificaciones: [8, 9, 9]},
    {nombre: "Zoe", edad: 17, grado: "5to", calificaciones: [6, 6, 5]},
    {nombre: "Daira", edad: 15, grado: "3ro", calificaciones: [10, 7, 8]}
]

const analizarEstudiantes = (estudiantes) => {
    const extraccion = estudiantes
}

analizarEstudiantes(estudiantes) */