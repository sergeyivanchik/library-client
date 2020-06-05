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
  CHECK_BOOK_FAILURE
} from '../consts/books';

const initialState = {
  bookList: [],
  currentBook: null,
  isChecked: false,
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

    default: return state;
  }
};

export default books;
