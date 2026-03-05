// La Api Fetch nos sirve para consumir Apis Rest, este es nativo de JS y está integrado en todos los navegadores 
// así que no hay necesidad de importar ninguna librería.
// Este fetch basicamente es una promesa de js.

// En este ejemplo vamos a trabajar con una ruta de JSON Placeholder.
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// Para manejar la respuesta de nuestra promesa fetch lo hacemos con then

/* httpClient.then(response => {
    // Convertimos nuestra respuesta en formato json que también es otra promesa y será manejada con then
    response.json().then(data => {
        console.log(data);
    })
}) */


// Esta es una manera más resumida de hacerlo con programación funcional

httpClient
    .then(response => response.json())
    .then(data => console.log(data));
