import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import Message from '../../components/Message';

import {
  logInSuccess,
  logInFailure,
  checkAuthorizationSuccess,
  checkAuthorizationFailure,
  checkAuthorizationAsync,
  logOutSuccess,
  logOutFailure
} from '../actions/users';
import { hideSpin, showSpin } from '../actions/spinner';


export function* logIn({ payload }) {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.post('users/login', { ...payload }));
    const { token } = data;

    if (token) {
      localStorage.setItem('token', token);
      yield put(logInSuccess());
    } else Message('error', 'Token not found!');

    yield put(checkAuthorizationAsync());
    // yield put(hideSpin());
    // Message('success', 'Вы успешно вошли!');
  } catch (error) {
    yield put(hideSpin());
    yield put(logInFailure(error));
  };
};

export function* checkAuthorization() {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers['AUTHORIZATION'] = token;
      const { data } = yield call(() => axios.post('users/checkUser'));

      yield put(checkAuthorizationSuccess(data));
      yield put(hideSpin());
      Message('success', 'Вы успешно вошли!');
    } catch (error) {
      yield put(hideSpin());
      yield put(checkAuthorizationFailure(error));
    }
};

export function* logOut() {
  try {
    localStorage.clear();
    yield put(checkAuthorizationFailure(''));
    yield put(logOutSuccess());
    Message('success', 'Вы успешно вышли!')
  } catch (error) {
    yield put(logOutFailure(error));
  };
};
