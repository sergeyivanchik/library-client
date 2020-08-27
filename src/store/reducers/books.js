
import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_CURRENT_BOOK_SUCCESS,
  GET_CURRENT_BOOK_FAILURE,
  GET_BOOKS_BY_AUTHOR_SUCCESS,
  GET_BOOKS_BY_AUTHOR_FAILURE,
  SELECT_BOOK_SUCCESS,
  SELECT_BOOK_FAILURE,
  CHECK_BOOK_SUCCESS,
  CHECK_BOOK_FAILURE,
  SEARCH_BOOKS,
  GET_BOOKS_RATING_SUCCESS,
  GET_BOOKS_RATING_FAILURE,
  SET_BOOKS_RATING,
  SET_BOOK_USER_RATING
} from '../consts/books';

const initialState = {
  bookList: [],
  foundedBooks: [],
  currentBook: null,
  isChecked: false,
  rates: [],
  error: ''
};

const books = (state = initialState, action) => {
  switch(action.type) {
  case GET_BOOKS_SUCCESS:
    return { ...state, bookList: action.payload };

  case GET_BOOKS_FAILURE:
    return { ...state, error: action.payload };

  case GET_CURRENT_BOOK_SUCCESS:
    return { ...state, currentBook: action.payload };

  case GET_CURRENT_BOOK_FAILURE:
    return { ...state, error: action.payload };

  case GET_BOOKS_BY_AUTHOR_SUCCESS:
    return { ...state, bookList: action.payload };

  case GET_BOOKS_BY_AUTHOR_FAILURE:
    return { ...state, error: action.payload };

  case SELECT_BOOK_SUCCESS:
    return { ...state, isChecked: action.payload };

  case SELECT_BOOK_FAILURE:
    return { ...state, error: action.payload };

  case CHECK_BOOK_SUCCESS:
    return { ...state, isChecked: action.payload };

  case CHECK_BOOK_FAILURE:
    return { ...state, error: action.payload };

  case SEARCH_BOOKS:
    return { ...state, foundedBooks: action.payload };

  case GET_BOOKS_RATING_SUCCESS:
    return { ...state,  rates: action.payload };

  case GET_BOOKS_RATING_FAILURE:
    return { ...state, error: action.payload };

  case SET_BOOKS_RATING:
    return { ...state, rates: action.payload };

  case SET_BOOK_USER_RATING:
    return { ...state, userRating:action.payload.userRating }

  default: return state;
  }
};

export default books;
