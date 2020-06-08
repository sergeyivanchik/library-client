import {
  SHOW_LOGIN_FORM,
  HIDE_LOGIN_FORM,
  SHOW_SIGNUP_FORM,
  HIDE_SIGNUP_FORM
} from '../consts/forms';

const initialState = {
  showLoginForm: false,
  showSignupForm: false
};

const forms = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_LOGIN_FORM:
      return { ...state, showLoginForm: true, showSignupForm: false};

    case HIDE_LOGIN_FORM:
      return { ...state, showLoginForm: false};

    case SHOW_SIGNUP_FORM:
      return { ...state, showLoginForm: false, showSignupForm: true};

    case HIDE_SIGNUP_FORM:
      return { ...state, showSignupForm: false};

    default: return state;
  }
};

export default forms;
