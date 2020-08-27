import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_BOOKS,
  GET_CURRENT_BOOK_SUCCESS,
  GET_CURRENT_BOOK_FAILURE,
  GET_CURRENT_BOOK,
  GET_BOOKS_BY_AUTHOR_SUCCESS,
  GET_BOOKS_BY_AUTHOR_FAILURE,
  GET_BOOKS_BY_AUTHOR,
  SELECT_BOOK_SUCCESS,
  SELECT_BOOK_FAILURE,
  SELECT_BOOK,
  CHECK_BOOK_SUCCESS,
  CHECK_BOOK_FAILURE,
  CHECK_BOOK,
  SEARCH_BOOKS,
  GET_BOOKS_RATING_SUCCESS,
  GET_BOOKS_RATING_FAILURE,
  GET_BOOKS_RATING,
  SET_BOOKS_RATING,
  SET_BOOK_USER_RATING
} from '../consts/books';


export const getBooksSuccess = data => ({
  type: GET_BOOKS_SUCCESS,
  payload: data
});

export const getBooksFailure = error => ({
  type: GET_BOOKS_FAILURE,
  payload: error
});

export const getBooksAsync = () => ({
  type: GET_BOOKS
});

export const getCurrentBookSuccess = data => ({
  type: GET_CURRENT_BOOK_SUCCESS,
  payload: data
});

export const getCurrentBookFailure = error => ({
  type: GET_CURRENT_BOOK_FAILURE,
  payload: error
});

export const getCurrentBookAsync = bookId => ({
  type: GET_CURRENT_BOOK,
  payload: bookId
});

export const getBooksByAuthorSuccess = data => ({
  type: GET_BOOKS_BY_AUTHOR_SUCCESS,
  payload: data
});

export const getBooksByAuthorFailure = error => ({
  type: GET_BOOKS_BY_AUTHOR_FAILURE,
  payload: error
});

export const getBooksByAuthorAsync = authorId => ({
  type: GET_BOOKS_BY_AUTHOR,
  payload: authorId
});

export const selectBookSuccess = data => ({
  type: SELECT_BOOK_SUCCESS,
  payload: data
});

export const selectBookFailure = error => ({
  type: SELECT_BOOK_FAILURE,
  payload: error
});

export const selectBookAsync = info => ({
  type: SELECT_BOOK,
  payload: info
});

export const checkBookSuccess = data => ({
  type: CHECK_BOOK_SUCCESS,
  payload: data
});

export const checkBookFailure = error => ({
  type: CHECK_BOOK_FAILURE,
  payload: error
});

export const checkBookAsync = info => ({
  type: CHECK_BOOK,
  payload: info
});

export const searchBooks = data => ({
  type: SEARCH_BOOKS,
  payload: data
});

export const getBooksRatingSuccess = data => ({
  type: GET_BOOKS_RATING_SUCCESS,
  payload: data
});

export const getBooksRatingFailure = error => ({
  type: GET_BOOKS_RATING_FAILURE,
  payload: error
});

export const getBooksRatingAsync = () => ({
  type: GET_BOOKS_RATING
});

export const setBooksRating = data => ({
  type: SET_BOOKS_RATING,
  payload: data
});

export const setBookUserRating = data => ({
  type: SET_BOOK_USER_RATING,
  payload: data
});
