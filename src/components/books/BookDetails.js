import React from 'react';
import PropTypes from 'prop-types';

function BookDetails({ book }) {
  return (
    <section>
      <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <img src={book.imageUrl}/>
      </div>
    </section>
  );
}

BookDetails.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })
};

export default BookDetails;
