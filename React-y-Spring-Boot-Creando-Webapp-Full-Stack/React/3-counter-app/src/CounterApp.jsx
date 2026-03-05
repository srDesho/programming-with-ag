// ¿Qué son los hooks?
// Funciones especiales de React que permiten usar estado y otras características
// sin necesidad de crear clases. Se usan directamente en componentes funcionales.

import { useState } from "react";

export const CounterApp = () => {
    // Definimos el estado 'counter' con un valor inicial de 0.
    // 'counter' es la variable de estado y 'setCounter' la función para actualizarla.
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        // La forma recomendada de actualizar el estado es usando un callback.
        // Esto asegura que siempre se trabaje con el valor más reciente del estado 'c',
        // previniendo errores de sincronización en actualizaciones múltiples.
        setCounter(c => c + 1);
    };

    return (
        <>
            <h2>El valor del contador es {counter}</h2>
            {/* Se asigna la función 'incrementCounter' al evento onClick. */}
            {/* Es más eficiente pasar la referencia a la función directamente en lugar de una función anónima. */}
            <button onClick={incrementCounter}>Incrementar contador +1</button>
        </>
    );
};