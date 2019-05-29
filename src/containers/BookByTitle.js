import { connect } from 'react-redux';
import BookDetails from '../components/books/BookDetails';
import { getBook } from '../selectors/bookSelector';

const mapStateToProps = (state, props) => ({
  book: getBook(state, props.match.params.title)
});


export default connect(
  mapStateToProps,
  null
)(BookDetails);
