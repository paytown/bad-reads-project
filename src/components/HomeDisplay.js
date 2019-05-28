import React from 'react';
import Books from './books/Books';
import BookForm from './books/BookForm';
import PropTypes from 'prop-types';

function HomeDisplay({ onSubmit, books }) {
  return (
    <>
      <BookForm onSubmit={onSubmit}/>
      <Books books={books} />
    </>
  );
}

HomeDisplay.propTypes = {
  books: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default HomeDisplay;
