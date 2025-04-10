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

// El spread operator nos sirve para clonar o exparsir todos los atributos que tiene un objeto.
// Al usar el spread operator es como si instaciaramos un nuevo objeto como lo hacemos en java con la palabra new.
// Ojo que no es igual pero se tiene un nuevo objeto con los mismos atributos.

// const invoice2 = invoice; // Cuando lo hacemos así y editamos algún atributo este se modifica en ambos.
// por eso hacemos uso del spread operator
const invoice2 = {...invoice};

const result = invoice === invoice2;

if (result) console.log('Son iguales.');
else console.log('No son iguales.');

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);



