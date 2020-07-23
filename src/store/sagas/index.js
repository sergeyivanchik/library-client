import { takeEvery, all } from 'redux-saga/effects';

import {
  GET_BOOKS,
  GET_CURRENT_BOOK,
  GET_BOOKS_BY_AUTHOR,
  SELECT_BOOK,
  CHECK_BOOK,
  GET_BOOKS_RATING
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
} from '../consts/users';
import {
  GET_COMMENTS_BY_BOOK,
  GET_COMMENTS_LIKES,
  GET_COMMENTS_LIKES_FAILURE
} from '../consts/comments'

import {
  getBooks,
  getCurrentBook,
  getBooksByAuthor,
  selectBook,
  checkBook,
  getBooksRating
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
import {
  getCommentsByBook,
  getCommentsLikes
} from './comments';


function* watchBooks() {
  yield takeEvery(GET_BOOKS, getBooks);
  yield takeEvery(GET_CURRENT_BOOK, getCurrentBook);
  yield takeEvery(GET_BOOKS_BY_AUTHOR, getBooksByAuthor);
  yield takeEvery(SELECT_BOOK, selectBook);
  yield takeEvery(CHECK_BOOK, checkBook);
  yield takeEvery(GET_BOOKS_RATING, getBooksRating);
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

function* watchComments() {
  yield takeEvery(GET_COMMENTS_BY_BOOK, getCommentsByBook);
  yield takeEvery(GET_COMMENTS_LIKES, getCommentsLikes);
};

export default function* rootSaga() {
  yield all([
    watchBooks(),
    watchAuthors(),
    watchPagination(),
    watchUsers(),
    watchComments()
  ]);
};
