// Arreglos
const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv'); // Con push agregamos elementos al array.

console.log(products);

products.forEach((el) => {
    console.log(el)
});

// products.forEach((el) => console.log(el)); // Resumido en una línea.
// products.forEach(console.log); // Otra forma mucho más resumida.

// Iterando con un for of
console.warn('For of');
for(const prod of products) {
    console.log(prod);
}

// Iterando con for tradicional.
console.warn('For tradicional');
for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);
}