
// Para importar objetos, clases, funciones, usamos la palabra reservada import
// Para importar objeto por defecto, sólo agregamos un nombre cualquiera antes de las {}
import invoiceByIdDefault, { invoices, paper, invoiceByClientName } from './data/invoices';

// El método MAP es similar al forEach con la diferencia de que el forEach 
// sirve para ejecutar algo pero no retorna nada, para iterar, mostrar en el log.
// El map recibe el objeto puede hacer lo mismo que el forEach pero este devuelve el objeto
// y podemos modificar el objeto a nuestro gusto, pero el arreglo que devuelve es como una copia, 
// es decir no modifica el original, y este nuevo objeto se genera con los elementos modificados.

const invoicesName = invoices.map(i => {
    return i.name;
});

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map(i => {
    // Si la factura tiene el ID 3, crea una nueva factura con el nombre de cliente modificado.
    if (i.id === 3) {
        return {
            ...i, // Copia todas las propiedades de la factura original
            client: {
                ...i.client, // Copia todas las propiedades del cliente original
                name: 'Oscar' // Sobrescribe el nombre
            }
        };
    }

    // Si no, devuelve la factura original sin cambios para mantener la inmutabilidad.
    return i;
});

// Extrae y devuelve solo el nombre del cliente de cada factura en el nuevo array.
const invoicesClientName = invoicesClient.map(ic => ic.client.name);
    
// invoicesClientName ahora contiene ['Nombre 1', 'Nombre 2', 'Oscar', 'Nombre 4']
// El array original 'invoices' permanece sin cambios.

console.log(invoicesClient);
console.log(invoicesClientName);

// MÉTODO .find
const invoiceById = invoices.find(i => i.id === 1);
console.log(invoiceById);

// MÉTODO .filter
// filtramos los elementos que contengan 'paper'

// El `.includes()` trabaja con arreglos, pero compara objetos por referencia, no por valor.
// Solo encontrará un objeto si es la misma instancia que ya existe en el arreglo.
const invoicesFilter = invoices.filter(i => i.items.includes(paper));
console.log(invoicesFilter);

// El método filter se usa mucho para eliminar elementos sin modificar el arreglo original.
console.log('FILTER ELIMINAR');

const deleteById = invoices.filter(i => i.id != '2');
console.log(deleteById);

// MÉTODO .some
// Retorna un boolean si encuentra un valor en el arreglo, caso contrario retorna false.
const result = invoices.some(i => i.client.name === ('Pedro'));
console.log(result);

// Usando la función invoiceByClientName importada
console.log("Función importada invoiceByClientName")
console.log(invoiceByClientName('Santiago'));

// Usando la función por defecto importada
console.log("Función importada por defecto")
console.log(invoiceByIdDefault(2));

