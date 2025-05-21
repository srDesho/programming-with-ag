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

invoice.client.name = 'Pepin';
// invoice.total = 5000;
console.log(invoice);
console.log(invoice.greeting());
console.log('total: ' + invoice.total())