const precios = [200, 300, 400, 100, 90, 180, 250, 350, 260, 150]
const iva = 21
let precioFinal = 0;

/*for (const precio of precios){
    precioFinal = parseFloat(precio + ((precio*iva)/100))
    console.log(`El precio es: $${precioFinal.toFixed(2)}. - IVA incluido.`)
}
console.log("-------------------------------------")*/

// Solucion mas eficiente
// Calculamos los precios con IVA usando map()
const preciosConIVA = precios.map(precio => precio * 1.21)

// Mostramos los precios con IVA usando forEach()
preciosConIVA.forEach(valorFinal => {
    console.log(`El precio es: $${valorFinal.toFixed(2)}. - IVA incluido.`)
})

/* Ventajas de esta solucion 
- Legibilidad: El codigo es mas claro.
- Eficiencia: Separa el calculo y la impresion, lo que facilita
el mantenimiento y la reutilizacion de codigo.
- Uso de metodos modernos: Aprovecha las funciones de orden superior
de los arrays (map() y forEach())
*/


