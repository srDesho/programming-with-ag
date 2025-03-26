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
    total: 1000,
    greeting: function() {
        return `Hello ${this.client.name}`;
    },

};

invoice.client.name = 'Pepin';
invoice.total = 5000;
console.log(invoice);
console.log(invoice.greeting());
