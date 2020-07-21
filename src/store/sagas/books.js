import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import Message from '../../components/Message';

import {
  getBooksSuccess,
  getBooksFailure,
  getCurrentBookSuccess,
  getCurrentBookFailure,
  getBooksByAuthorSuccess,
  getBooksByAuthorFailure,
  selectBookSuccess,
  selectBookFailure,
  checkBookSuccess,
  checkBookFailure,
  getBookRatingSuccess,
  getBookRatingFailure
} from '../actions/books';
import { hideSpin, showSpin } from '../actions/spinner';


export function* getBooks() {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.get('books'));

    yield put(getBooksSuccess(data));
    yield put(hideSpin());
  } catch (error) {
    yield put(hideSpin());
    yield put(getBooksFailure(error));
  };
};

export function* getCurrentBook({ payload }) {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.get(`books/${payload}`));

    yield put(getCurrentBookSuccess(data));
    yield put(hideSpin());
  } catch (error) {
    yield put(hideSpin());
    yield put(getCurrentBookFailure(error));
  };
};

export function* getBooksByAuthor({ payload }) {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.get(`books/author/${payload}`));

    yield put(getBooksByAuthorSuccess(data));
    yield put(hideSpin());
  } catch (error) {
    yield put(hideSpin());
    yield put(getBooksByAuthorFailure(error));
  };
};

export function* selectBook({ payload }) {
  try {
    const { data } = yield call(() =>
      axios.put(`selectedBooks/${payload.userId}/${payload.bookId}`)
    );

    yield put(selectBookSuccess(data));

    const messageText = data ? 'Книга успешно добавлена!' : 'Книга успешно удалена!';
    Message('success', messageText);
  } catch (error) {
    yield put(selectBookFailure(error));
  };
};

export function* checkBook({ payload }) {
  try {
    const { data } = yield call(() =>
      axios.get(`selectedBooks/${payload.userId}/${payload.bookId}`)
    );

    yield put(checkBookSuccess(!!data));
  } catch (error) {
    yield put(checkBookFailure(error));
  };
};

export function* getBookRating({ payload }) {
  try {
    const { data } = yield call(() =>
      axios.post(`books/getRating/${payload.bookId}/${payload.userId}`)
    );

    yield put(getBookRatingSuccess(data));
  } catch (error) {
    yield put(getBookRatingFailure(error));
  };
};
