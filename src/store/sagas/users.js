import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import Message from '../../components/Message';

import {
  logInSuccess,
  logInFailure,
  checkAuthorizationSuccess,
  checkAuthorizationFailure,
  logOutSuccess,
  logOutFailure,
  signUpSuccess,
  signUpFailure
} from '../actions/users';
import { hideSpin, showSpin } from '../actions/spinner';
import { hideLoginForm, hideSignupForm } from '../actions/forms';


export function* logIn({ payload }) {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.post('users/login', { ...payload }));
    const { id, token, username } = data;

    if (token) {
      localStorage.setItem('token', token);
      yield put(logInSuccess({ id, username }));
    } else Message('error', 'Token not found!');

    yield put(hideLoginForm());
    yield put(hideSpin());
    Message('success', 'Вы успешно вошли!');
  } catch (error) {
    yield put(hideSpin());
    yield put(logInFailure(error));
    Message('error', 'Введены некоректные данные!');
  };
};

export function* checkAuthorization() {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        axios.defaults.headers['AUTHORIZATION'] = token;
        const { data } = yield call(() => axios.post('users/checkUser'));
        yield put(checkAuthorizationSuccess(data));
      } else {
        yield put(checkAuthorizationFailure('Token not found!'));
      }
    } catch (error) {
      yield put(checkAuthorizationFailure(error));
    }
};

export function* logOut() {
  try {
    localStorage.clear();
    yield put(logOutSuccess());
    Message('success', 'Вы успешно вышли!');
    window.location.pathname('/');
  } catch (error) {
    yield put(logOutFailure(error));
  };
};

export function* signUp({ payload }) {
  try {
    yield put(showSpin());

    const { data } = yield call(() => axios.post('users/signup', { ...payload }));

    if (data) {
      yield put(signUpSuccess());
    } else Message('error', 'Something wrong!');

    yield put(hideSignupForm());
    yield put(hideSpin());
    Message('success', 'Вы успешно зарегистрировались!');
  } catch (error) {
    yield put(hideSpin());
    yield put(signUpFailure(error));
    Message('error', 'Введены некоректные данные!');
  };
};
