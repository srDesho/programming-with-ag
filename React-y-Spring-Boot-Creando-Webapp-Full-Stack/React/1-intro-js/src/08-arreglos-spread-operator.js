// Arreglos
const products = ['mesa', 'silla', 'notebook', 'teclado'];
// Instanciando arreglos con .concat
const products2 = products.concat(['manzanas', 'sandías', 'frutillas']);

const fruits = ['peras', 'manzanas', 'sandías', 'frutillas']

// Combinamos ambos arreglos con el spread operator
const market = [...products, ...fruits, 'papas', 'lechuga', 'uvas'];
const market2 = products.concat(fruits).concat('papas', 'lechuga', 'uvas');

console.log(products);
console.log(products2);
console.log(market2);
