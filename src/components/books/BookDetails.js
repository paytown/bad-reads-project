import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/CreateComment';
import AllComments from '../../containers/AllComments';

function BookDetails({ book }) {
  return (
    <section>
      <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <img src={book.imageUrl}/>
      </div>
      <div>
        <CreateComment bookTitle={book.title} />
      </div>
      <div>
        <AllComments bookTitle={book.title} />
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
