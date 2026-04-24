// Ejercicio 1 - Consumir una API con Promesas

/* 
    1. Utiliza la API pública de Rick and Morty (docs) para obtener la lista de 
    personajes.
    2. Con las herramientas then, catch y finally, procesa la respuesta y 
    devuelve por consola un array con los primeros 5 resultados de los 20 
    personajes recibidos. 
*/

const URL = "https://rickandmortyapi.com/api/character"

/*fetch(URL) // Por defecto es un GET, no necesita config
.then((response) => {
    if (!response.ok){
        throw new Error("Error en la solicitud")
    }
    return response.json();
})
.then((data) => {
    const primerosCinco = data.results.slice(0, 5).map(personaje => ({
        id: personaje.id,
        name: personaje.name,
        status: personaje.status,
        species: personaje.species
    }))
    console.log("Primeros 5 personajes: " , primerosCinco)
    return primerosCinco
})
.catch(error => {
    console.error('Se ha producido un error')
    console.error('Mensaje del Error: ', error.message)
})
.finally(() => {
    console.log("Operacion completada")
})*/


// Ejercicio 2 - Explorando la API con Async/Await

/*
    1. Realiza el mismo ejercicio anterior, pero esta vez usa una función 
    asíncrona con async y await para consumir la API.
    2. Asegúrate de manejar errores correctamente con un bloque try/catch. 
*/

async function obtenerPersonajes() {
    console.log("Inicio de la tarea");
    try {
        const result = await fetch(URL);
        const datos = await result.json()
        const primerosCinco = datos.results.slice(0, 5).map(p => ({
            id: p.id,
            name: p.name,
            status: p.status,
            species: p.species

        }))
        console.log("Primeros 5 personajes: " , primerosCinco)
        return primerosCinco
    } catch (error){
        console.log("Se ha producido un error")
        console.error("Mensaje del Error: ", error.messaje)
    } finally {
        console.log("Fin de la tarea")
    }
}

obtenerPersonajes()