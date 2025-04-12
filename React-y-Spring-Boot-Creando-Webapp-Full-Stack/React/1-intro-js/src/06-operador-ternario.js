// Operador ternario, es como un if, pero siempre va a retornar algo que se será asigado a una variable.

const average = 4.9;
let status2 = '';

status2 = status2 >= average ? 'Aprobado' : 'Reprobado'

console.log(`Resultado: ${status2}`);

// Otro ejemplo calculando el mayor.
let max = 0;

const a = 5;
const b = 8;
const c = 13;

max = a > 5 ? a : b;
max = max > c ? max : c;
console.log(`El nro mayor es ${max}`); 
