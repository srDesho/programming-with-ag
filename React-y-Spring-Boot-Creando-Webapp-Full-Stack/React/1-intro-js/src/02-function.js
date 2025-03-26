
function sayHello(name, age = 0) {

    const greeting = `Hello ${name}, you are ${age} years old.`;
    return greeting;
}

console.log(sayHello('Pedrito', 15));

// Arrow function

const greeting = (name, age = 0) => {
    
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greeting('Alegrín', 26));

// Arrow function

const greeting2 = (name, age = 0) => `Hello ${name}, you are ${age} years old.`;

console.log(greeting2('Summarized', 26));


