import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN,
  CHECK_AUTHORIZATION_SUCCESS,
  CHECK_AUTHORIZATION_FAILURE,
  CHECK_AUTHORIZATION
} from '../consts/users';

export const logInSuccess = () => ({
  type: LOG_IN_SUCCESS
});

export const logInFailure = error => ({
  type: LOG_IN_FAILURE,
  payload: error
});

export const logInAsync = userInfo => ({
  type: LOG_IN,
  payload: userInfo
});

export const checkAuthorizationSuccess = currentUser => ({
  type: CHECK_AUTHORIZATION_SUCCESS,
  payload: currentUser
});

export const checkAuthorizationFailure = error => ({
  type: CHECK_AUTHORIZATION_FAILURE,
  payload: error
});

export const checkAuthorizationAsync = () => ({
  type: CHECK_AUTHORIZATION
});
