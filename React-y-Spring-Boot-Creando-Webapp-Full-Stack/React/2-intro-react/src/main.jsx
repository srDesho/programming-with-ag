import React from 'react'
// `react-dom` es para la web. Para móviles se usa `react-native`.
import ReactDOM from 'react-dom/client' 
import HelloWorldApp from './HelloWorldApp';

// Renderiza el componente App en el elemento con ID 'root'.
// `StrictMode` es una herramienta de desarrollo que ayuda a detectar posibles problemas.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Las props (propiedades) se pasan como atributos.
        Los valores que no son strings (números, booleanos, objetos) deben ir entre llaves {}. */}
    <HelloWorldApp user={{ name: 'Yandy', lastName: 'Mont' }} id={1} book='UML gota a gota' />
  </React.StrictMode>
);