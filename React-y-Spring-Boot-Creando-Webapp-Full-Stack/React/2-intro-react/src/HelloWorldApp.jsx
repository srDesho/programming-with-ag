import PropTypes from 'prop-types';
import React from 'react';
import { ListAnimes } from './components/ListAnimes';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { Book } from './components/Book';

// Se usa la desestructuración ({}) para extraer las props.
const HelloWorldApp = ({ user, id, title, book, listAnimes }) => {
  // Los paréntesis son necesarios para retornar JSX multilínea.
  // Un fragmento (<>...</>) agrupa elementos sin agregar un nodo extra al DOM.
  return (
    <>
      {/* Las llaves {} permiten incrustar expresiones de JavaScript. */}
      <UserDetails user={user} id={id}/>
      <Title title = {title} />
      <ListAnimes ListAnimes />
      <br />
      <Book book={book}/>
    </>
  );
};

// La validación de propiedades se define aquí.
HelloWorldApp.propTypes = {
  // Se usa PropTypes.shape para validar la estructura de un objeto.
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

// defaultProps es una forma clásica de definir valores por defecto para las props.
// La forma moderna y más común es hacerlo directamente en la desestructuración:
// const HelloWorld = ({ ..., title = 'Hello World' }) => {...};
HelloWorldApp.defaultProps = {
  title: 'Hello to everything',
};

export default HelloWorldApp;