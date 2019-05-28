import { ADD_BOOK, REMOVE_BOOK } from '../actions/bookActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state, state.map(book => {
        return (book.title !== action.payload.title);
      })];
    default: 
      return state;
  }
}
