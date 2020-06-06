import {
  SHOW_LOGIN_FORM,
  HIDE_LOGIN_FORM
} from '../consts/forms';

export const showLoginForm = () => ({
  type: SHOW_LOGIN_FORM
});

export const hideLoginForm = () => ({
  type: HIDE_LOGIN_FORM
});
