
// Esta es una clase para exportar

const paper = {
                product: 'paper',
                price: 100,
                quantity: 10,
            };

// Podemos exportar objetos, arreglos, funciones, etc, con la palabra reservada export para que así
// el archivo donde se importe sepa qué objetos son importables.
const invoices = [
    {
        id: 1,
        mame: 'Compras de oficina',
        client: {
            name: 'Juan',
            lastname: 'López',
        },
        items: [
            {
                product: 'Keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'mouse',
                price: 200,
                quantity: 1,
            },
            paper,
        ],

    },
    {
        id: 2,
        name: 'Compras de computación',
        client: {
            name: 'Pedro',
            lastname: 'López',
        },
        items: [
            {
                product: 'Keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'Screen 17',
                price: 800,
                quantity: 1,
            },
        ],

    },
    {
        id: 3,
        name: 'Compras de papelería',
        client: {
            name: 'Santiago',
            lastname: 'López',
        },
        items: [
            {
                product: 'pencil',
                price: 50,
                quantity: 1,
            },
            paper,
        ],

    },
]

// Creamos una función que busca un cliente por su nombre
const invoiceByClientName = (clientName) => invoices.find(i => i.client.name === clientName);
// Podemos hacer que cualquier objeto se exporte por defecto, 
// lo que hacemos es crear el crearlo sin nombre sólo con las palabras export default.
// export default (itemId) => invoices.find(i => i.id === itemId);

const invoiceById = (itemId) => invoices.find(i => i.id === itemId);

const findInvoiceById = (id) => {
    // Se simula una operación asíncrona con un retraso de 2.5 segundos.
    // Comentamos el código para hacer ejemplo importándolo desde la ruta(importamos la misma función).
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
}

// Otra forma de exportar objetos es haciendolo de la sgte manera:
// para hacer esto no hay necesidad de poner export en cada objeto: "export const cualquierObj = {}"
export {
    paper,
    invoices,
    invoiceByClientName,
    invoiceById as default, // Sólo se permite un default por modulo.
    findInvoiceById
}