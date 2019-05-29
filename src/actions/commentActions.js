export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (text, bookTitle) => ({
  type: ADD_COMMENT,
  payload: { text, bookTitle }
});
// export const REMOVE_COMMENT = 'REMOVE_COMMENT';
