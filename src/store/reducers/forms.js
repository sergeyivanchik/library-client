import {
  SHOW_LOGIN_FORM,
  HIDE_LOGIN_FORM
} from '../consts/forms';

const initialState = {
  showLoginForm: false
};

const forms = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_LOGIN_FORM:
      return { ...state, showLoginForm: true};

    case HIDE_LOGIN_FORM:
      return { ...state, showLoginForm: false};

    default: return state;
  }
};

export default forms;
