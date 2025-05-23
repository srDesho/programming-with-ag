import React from 'react'
// `react-dom` es para aplicaciones web. Para móviles, se usa `react-native`.
import ReactDOM from 'react-dom/client' 
import './index.css'
import App from './App.jsx'

// Ejemplo comparativo: Manipulación del DOM con JavaScript nativo.
// const h2 = document.createElement('h1');
// h2.innerText = 'Hello World';

// Creación de elementos con React.createElement (la forma original).
// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'Item 1')));

// JSX (JavaScript XML): Una sintaxis más declarativa y legible para crear elementos.
// JSX es una extensión de JavaScript que permite escribir HTML dentro del código JS.
const h1 = <div><ul><li>I am the best programmer.</li></ul></div>

// Babel transpila el código JSX a llamadas de `React.createElement` para que el navegador lo entienda.
// Transpilar significa convertir código de una versión a otra, por ejemplo, ES6 a ES5.

// Renderiza el componente `h1` en el elemento DOM con ID 'root'.
// `StrictMode` activa revisiones adicionales para buenas prácticas y advertencias de desarrollo.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App/>
  // </StrictMode>,
  h1
)