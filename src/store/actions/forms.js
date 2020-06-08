import {
  SHOW_LOGIN_FORM,
  HIDE_LOGIN_FORM,
  SHOW_SIGNUP_FORM,
  HIDE_SIGNUP_FORM
} from '../consts/forms';

export const showLoginForm = () => ({
  type: SHOW_LOGIN_FORM
});

export const hideLoginForm = () => ({
  type: HIDE_LOGIN_FORM
});

export const showSignupForm = () => ({
  type: SHOW_SIGNUP_FORM
});

export const hideSignupForm = () => ({
  type: HIDE_SIGNUP_FORM
});
