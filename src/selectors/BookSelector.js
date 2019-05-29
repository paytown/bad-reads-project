export const getBooks = state => {
  return state.books;
};

export const getBook = (state, title) => {
  return state.books.find(book => {
    return book.title === title;
  });
};
