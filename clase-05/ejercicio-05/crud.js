/* Ejercicio 2 - ¡Acciones dinámicas con Node.js! 
    1. Si el comando es npm run start GET, imprime por consola el mensaje:
    Toma un dato

    2. Si el comando es npm run start POST {data}, imprime por consola el
    mensaje:
    Recibimos {data} satisfactoriamente

    3. Si el comando es npm run start PUT {id}, imprime por consola el mensaje:
    Modificamos el item con id: {id} satisfactoriamente

    4. Si el comando es npm run start DELETE {id}, imprime por consola el
    mensaje:
    El item con el id: {id} se eliminó con éxito 
*/


const args = process.argv.slice(2) /* Obtenemos los argumentos desde
la terminal ignorando los 2 primeros (node y archivo) */

const metodo = args[0]
const data = args[1]
const id = args[1]

if (metodo === "GET"){
    console.log(`Toma un dato`)
} else if (metodo === "POST"){
    console.log(`Recibimos ${data} satisfactoriamente`)
} else if (metodo === "PUT" && (!isNaN(id) && id !== undefined)){
    console.log(`Modificamos el item con id: ${id} satisfactoriamente`)
} else if (metodo === "DELETE" && (!isNaN(id) && id !== undefined)){
    console.log(`El item con el id ${id} se elimino con exito`)
} else {
    console.log("Comando no reconocido. Utilice 'GET', 'POST', 'PUT' o 'DELETE'")
}

// Manejar multiples argumentos

/* const metodo = args[0];
const data = args.slice(1); // Captura todos los argumentos después del método

if (metodo === "POST" && data.length > 0) {
    console.log(`Recibimos ${data.join(' ')} satisfactoriamente`);
} else {
    // ...existing code...
}*/