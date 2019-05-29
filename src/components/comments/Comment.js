import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <>
      <p>{ comment.text }</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.object
};

export default Comment;
