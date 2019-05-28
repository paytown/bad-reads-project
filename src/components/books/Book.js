import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const { title, author, imageUrl } = book;
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <img src={imageUrl}/>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.object
};

export default Book;

