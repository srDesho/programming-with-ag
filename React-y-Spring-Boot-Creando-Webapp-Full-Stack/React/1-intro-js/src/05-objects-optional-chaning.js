const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Santiago',
        lastname: 'López',
        age: 20,
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
        {
            product: 'paper',
            price: 100,
            quantity: 10,
        },
    ],
    total: function() {
        let total = 0;
        this.items.forEach(item => {
            total = total + (item.price * item.quantity);
        });
        return total;
    },
    greeting: function() {
        return `Hello ${this.client.name}`;
    },

};

// OPTIONAL CHAINING
// El optional chaining en JavaScript (?.) es un operador que te permite acceder a propiedades anidadas 
// de un objeto sin tener que verificar explícitamente si cada nivel intermedio existe. Si alguna propiedad
//  en la cadena es null o undefined, la expresión completa se evalúa a undefined en lugar de lanzar un error.

// Es decir evitar errores al intentar acceder a propiedades anidadas, devolviendo undefined si no existe.

// console.log(invoice.company.name); // Veremos que nos dará error porque no existe esa propiedad company ni name.
console.log(invoice.company?.name); // Usando el optional chaining(?) este nos devulve undefined
console.log(invoice.client?.address?.name);

// El optional chaining equivale a esto
if (invoice.company != undefined && invoice.company.name) {
    console.log('perfecto!!!');
} else {
    console.log('No viene la empresa.');
}