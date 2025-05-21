// La forma tradicional de consumir APIs usando el método .then() y .catch().
/*
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

httpClient
    .then(response => response.json())
    .then(data => console.log(data));
*/

// 'async' y 'await' ofrecen una sintaxis más limpia y secuencial para manejar promesas.
// 'await' solo puede ser usado dentro de una función marcada con 'async'.

const findAllUsers = async () => {
    // 'await' pausa la ejecución hasta que la promesa de 'fetch' se resuelve,
    // devolviendo el objeto de respuesta HTTP.
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // 'await' de nuevo para esperar a que la promesa de 'response.json()' se resuelva,
    // devolviendo los datos JSON.
    return await response.json();
};

// Se usa 'await' para obtener el valor resuelto de la promesa que devuelve 'findAllUsers()'.
// El ámbito global de un módulo permite usar 'await' sin una función 'async'.
const users = await findAllUsers();

// Ahora 'users' es el array con los datos, lo que permite buscar directamente.
console.log(users.find(user => user.id === 1));
console.log("Hola qué tal.");

// Práctica con la Api DOM (Document Object Model)
// La API DOM es una interfaz de programación para documentos web que representa la página como un árbol de nodos, 
// permitiendo a lenguajes como JavaScript acceder y manipular el contenido, la estructura y los estilos de un documento HTML o XML.

const findAllUsers2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    // Creamos una lista con ul
    const ul = document.createElement('ul');

    // Iteramos los usuarios para agregar cada elemento li a la lista ul.
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.append(li);
        console.log(user.name);
    })
    // Para ponerlo en el body necesitamos el nombre de id del elemento HTML en el que queremos agregarlo
    document.getElementById('root').append(ul);
};

findAllUsers2();