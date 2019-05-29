import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Book({ book }) {
  const { title, author, imageUrl } = book;
  return (
    <>
    <Link to={`/${title}`}>
      <p>{title}</p>
    </Link>
      <p>{author}</p>
      <img src={imageUrl}/>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.object
};

export default Book;

