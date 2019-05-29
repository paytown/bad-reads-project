import { ADD_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return { 
        ...state, 
        [action.payload.bookTitle]: [
          ...state(state[action.payload.bookTitle] || []),
          action.payload.text
        ] };
    default:
      return state;
  }
}
