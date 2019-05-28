import { connect } from 'react-redux';
import HomeDisplay from '../components/HomeDisplay';
import { getBooks } from '../selectors/BookSelector';
import { addBook } from '../actions/bookActions';

const mapStateToProps = state => ({
  books: getBooks(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(title, author, imageUrl) {
    dispatch(addBook(title, author, imageUrl));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDisplay);
