// Un componente funcional es una función de JavaScript que retorna JSX.
import React from 'react'

// Se usa la desestructuración ({}) para extraer las props directamente.
const HelloWorld = ({ user, id, title = 'HELLO WORLD' }) => {
  // Los paréntesis son necesarios para envolver el JSX si se retorna en varias líneas.
  // Un fragmento (<>...</>) se usa para envolver múltiples elementos sin agregar un nodo extra al DOM.
  return (
    <>
      {/* Las llaves {} se usan para incrustar expresiones de JavaScript dentro de JSX. */}
      <h1>{title}</h1>
      <h2>LISTA DE LOS MEJORES ANIMES QUE LE GUSTAN A {user.name} {user.lastName} con id {id + 10}</h2>
      <ul>
        <li>Jujutsu Kaisen</li>
        <li>Naruto</li>
        <li>Dragon Ball</li>
        <li>Blue Lock</li>
        <li>My hero Academic</li>
      </ul>
    </>
  );
}

export default HelloWorld;