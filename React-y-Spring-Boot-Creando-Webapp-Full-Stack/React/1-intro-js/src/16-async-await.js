// Consumiendo APIs de forma tradicional con promesas (.then y .catch).
/*
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

httpClient
    .then(response => response.json()) // Convierte la respuesta HTTP a formato JSON.
    .then(data => console.log(data));
*/

// 'async' y 'await' proporcionan una sintaxis moderna y más legible para manejar promesas.
// 'await' solo funciona dentro de una función declarada con la palabra clave 'async'.

const findAllUsers = async () => {
    // 'await' pausa la ejecución hasta que la respuesta de la API (promesa de fetch) se resuelve.
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // 'await' pausa de nuevo para obtener los datos JSON de la respuesta.
    return await response.json();
};

// Se usa 'await' para obtener el array de usuarios directamente de la promesa.
// Esto funciona en el ámbito global porque el archivo es un módulo ES6.
const users = await findAllUsers();

// Con el array de usuarios obtenido, se puede buscar y manipular los datos.
console.log(users.find(user => user.id === 1));
console.log("Hola qué tal.");

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Práctica con la API DOM (Document Object Model)
// El DOM es una interfaz que representa la página web como un árbol de objetos, permitiendo manipular su contenido y estructura.
// Los frameworks modernos, como React, trabajan sobre el mismo concepto de manipulación del DOM.

const findAllUsers2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    // Se crea un elemento HTML <ul> para la lista.
    const ul = document.createElement('ul');

    // Se itera sobre el array de usuarios para crear un <li> por cada uno.
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.append(li);
        console.log(user.name);
    });
    
    // Se inserta la lista <ul> completa en el elemento con el ID 'root' del HTML.
    document.getElementById('root').append(ul);
};

findAllUsers2();