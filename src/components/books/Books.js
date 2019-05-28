import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Books({ books }) {
  const booksArray = books.map(book => {
    return (
      <li key={book.title}>
        <Book book={book} />
      </li>
    );
  });

  return (
    <ul>
      {booksArray}
    </ul>
  );
}

Books.propTypes = {
  books: PropTypes.array.isRequired
};

export default Books;
