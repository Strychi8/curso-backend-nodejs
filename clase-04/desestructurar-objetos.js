const persona = {
    nombre : "Nicolas",
    edad : 29
}

const {nombre, edad} = persona
console.log("Nombre:",nombre, "| Edad:", edad)

const {apellido = "Ortega"} = persona
console.log(apellido)
console.log(persona)

/*
const personas = [{nombre : "nicolas", edad : 29}]
const [{nombre1, edad1}] = personas
console.log(nombre1, edad1)*/

//renombrar la clave
const {nombre : nombrePersona} = persona
console.log(nombrePersona)