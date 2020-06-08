import { takeEvery, all } from 'redux-saga/effects';

import {
  GET_BOOKS,
  GET_CURRENT_BOOK,
  GET_BOOKS_BY_AUTHOR,
  SELECT_BOOK,
  CHECK_BOOK
} from '../consts/books';
import {
  GET_AUTHORS,
  GET_CURRENT_AUTHOR
} from '../consts/authors';
import { SET_CURRENT_NUMBER } from '../consts/pagination';
import {
  LOG_IN,
  CHECK_AUTHORIZATION,
  LOG_OUT,
  SIGN_UP
} from '../consts/users'

import {
  getBooks,
  getCurrentBook,
  getBooksByAuthor,
  selectBook,
  checkBook
} from './books';
import {
  getAuthors,
  getCurrentAuthor
} from './authors';
import { setCurrentNumber } from './pagination';
import {
  logIn,
  checkAuthorization,
  logOut,
  signUp
} from './users';


function* watchBooks() {
  yield takeEvery(GET_BOOKS, getBooks);
  yield takeEvery(GET_CURRENT_BOOK, getCurrentBook);
  yield takeEvery(GET_BOOKS_BY_AUTHOR, getBooksByAuthor);
  yield takeEvery(SELECT_BOOK, selectBook);
  yield takeEvery(CHECK_BOOK, checkBook);
};

function* watchAuthors() {
  yield takeEvery(GET_AUTHORS, getAuthors);
  yield takeEvery(GET_CURRENT_AUTHOR, getCurrentAuthor);
};

function* watchPagination() {
  yield takeEvery(SET_CURRENT_NUMBER, setCurrentNumber);
};

function* watchUsers() {
  yield takeEvery(LOG_IN, logIn);
  yield takeEvery(CHECK_AUTHORIZATION, checkAuthorization);
  yield takeEvery(LOG_OUT, logOut);
  yield takeEvery(SIGN_UP, signUp);
};

export default function* rootSaga() {
  yield all([
    watchBooks(),
    watchAuthors(),
    watchPagination(),
    watchUsers()
  ]);
};
