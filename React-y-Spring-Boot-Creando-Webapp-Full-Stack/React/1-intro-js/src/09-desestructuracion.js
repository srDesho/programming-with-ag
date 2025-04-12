// Desestructuración
// Es desacoplar los objetos, podemos obtener uno o mas elementos separados de un objeto en nuevas variables.

const user = {
    username: 'andres',
    email: 'andres@gmail.com',
    age: 26,
    ranking: 9,
};

// Esta es una manera de obtener los datos en distintas variables, pero son muchas líneas de códigos.
// const username= user.username;
// const ranking = user.ranking;
// const age = user.age;

const {username, ranking, age} = user; // De esta manera hacemos la desestructuración mucho más simple.
console.log(`${username} tiene ${age} años de edad.`);
console.log(ranking);

