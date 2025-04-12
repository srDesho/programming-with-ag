// Desestructuración
// Es desacoplar los objetos, podemos obtener uno o mas elementos separados de un objeto en nuevas variables.

const user = {
    username: 'andres',
    email: 'andres@gmail.com',
    age: 26,
    ranking: 9,
};

// Creamos una función lambda.
// Recibe el usuario pero haciendo la desestructuración solo para username y email.
const detail = ({username, email}) => {
    console.log(`El detalle del usuario '${username}' con correo '${email}'`);
};

// Hacemos el llamado de nuestra función pasando como parámetro el objeto user.
detail(user);
