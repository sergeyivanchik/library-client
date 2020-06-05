import { put, call } from 'redux-saga/effects'
import axios from 'axios';

import {
  getAuthorsSuccess,
  getAuthorsFailure,
  getCurrentAuthorSuccess,
  getCurrentAuthorFailure
} from '../actions/authors';
import { hideSpin, showSpin } from '../actions/spinner';


export function* getAuthors() {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.get('authors'));

    yield put(getAuthorsSuccess(data));
    yield put(hideSpin());
  } catch (error) {
    yield put(hideSpin());
    yield put(getAuthorsFailure(error));
  };
};

export function* getCurrentAuthor({ payload }) {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.get(`authors/${payload}`));

    yield put(getCurrentAuthorSuccess(data));
    yield put(hideSpin());
  } catch (error) {
    yield put(hideSpin());
    yield put(getCurrentAuthorFailure(error));
  };
};
