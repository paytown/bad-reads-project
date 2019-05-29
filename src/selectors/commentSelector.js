export const getComments = (state, bookTitle) => {
  return state.comments[bookTitle] || [];
};
