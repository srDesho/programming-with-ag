// ¿Qué son los hooks?
// Funciones especiales de React que permiten usar estado y otras características
// sin necesidad de crear clases. Se usan directamente en componentes funcionales.

import { useState } from "react";

// Permiten gestionar el estado (useState), efectos secundarios (useEffect),
// y otros comportamientos reactivos de forma modular.

// Cada hook se ejecuta en el mismo orden en cada renderizado,
// y solo afecta al componente que lo usa, evitando renders innecesarios.

// También facilitan la reutilización de lógica de negocio entre componentes.

export const CounterApp = () => {

    // Creamos nuestro hook counter que será llamada en el callback de onClick
    const [counter, setCounter] = useState(0); // Definicimos un valor inicial en nuesto hook porque sino sería undefined.
    
    const incrementCounter = () => {
        // setCounter(counter + 1);
        // Otra manera de hacerlo es con callback (RECOMENDADO).
        setCounter(c => c + 1);
    }
    return (
    <>
        <h2>El valor del contador es {counter}</h2>
        {/* <button onClick={() => incrementCounter()}>Incrementar Contador +1</button> */}
        {/* Podemos resumir la línea con lo sgte. */}
        <button onClick={incrementCounter}>Incrementar contador +1</button>
        
    </>
    );
}