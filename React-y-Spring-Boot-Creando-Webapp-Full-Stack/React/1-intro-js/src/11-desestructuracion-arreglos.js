// Desestructuración
// Es desacoplar los objetos, podemos obtener uno o mas elementos separados de un objeto en nuevas variables.

// Aplicando desestructuración a un arreglo.
const users = ['pepe', 'ana', 'maria', 'juan', 'sebastian', 'carlos', 'josefa'];

// Obtenemos a los primeros tres.
// const [pepe, b, maria] = users; // Podemos poner cualquier nombre de las variables, siempre respetando el orden.

// Podemos obtener cualquier usuario en la posición que querramos colocando comas como elementos vacíos.
// ejemplo obteniendo carlos que está en la penúltima posición.
// const [pepe, ana, maria, , , carlos] = users;

// PARÁMETRO REST
// Sirve para obtener el resto, o sea todo lo demás que sobra, para así no tener que escribir uno por uno.
const [pepe, ana, maria, ...rest] = users;
console.log(pepe, ana, maria, ...rest);