// El código debe importar las funciones desde la ruta correcta.
import invoiceById, {findInvoiceById} from "./data/invoices";

// Una promesa representa una operación asíncrona que aún no ha terminado.
// Siempre retorna un resultado: éxito (resolve) o fracaso (reject).
// Si la operación se cumple, se llama a `resolve`.
// Si la operación falla, se llama a `reject`.

// Comentamos el código para hacer ejemplo importándolo desde la ruta(importamos la misma función).

/* const findInvoiceById = (id) => {
    // Se simula una operación asíncrona con un retraso de 2.5 segundos.
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const invoice = invoiceById(id); // Se intenta obtener una factura con el ID 5.
            
            // Se valida el resultado de la operación.
            if (invoice) {
                // Si se encuentra la factura, se resuelve la promesa con el objeto 'invoice'.
                resolve(invoice);
            } else {
                // Si la factura no existe, se rechaza la promesa con un mensaje de error.
                reject('Error: no existe la factura con el ID dado.');
            }
        }, 2500);
    });
     return promise;
} */

// Para manejar el resultado de la promesa, se usan los métodos `.then()` y `.catch()`.
// `.then()` se ejecuta si la promesa se resuelve (éxito).
findInvoiceById(2).then(invoice => {
    // Aquí se recibe el valor de `resolve(invoice)`.
    console.log(invoice);
    console.log("Tarea asíncrona completada con éxito.");
}).catch(console.error); // `.catch()` se ejecuta si la promesa se rechaza (fracaso). Es una sintaxis corta para `(error) => console.error(error)`.