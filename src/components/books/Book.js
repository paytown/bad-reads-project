import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <img src={book.imageUrl}/>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.object
};

export default Book;

