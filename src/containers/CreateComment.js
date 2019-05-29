import { connect } from 'react-redux';
import { addComment } from '../actions/commentActions';
import CommentForm from '../components/comments/CommentForm';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(text) {
    dispatch(addComment(text, props.bookTitle));
  }
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CommentForm));
