export const ADD_BOOK = 'ADD_BOOK';
export const addBook = (title, author, imageUrl) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    imageUrl
  }
});
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const removeBook = (title) => ({
  type: REMOVE_BOOK,
  payload: {
    title
  }
});

