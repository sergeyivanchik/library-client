import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  CHECK_AUTHORIZATION_SUCCESS,
  CHECK_AUTHORIZATION_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE
} from '../consts/users';

const initialState = {
  currentUser: null,
  error: ''
};

const users = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      return { ...state };

    case LOG_IN_FAILURE:
      return { ...state, error: action.payload };

    case CHECK_AUTHORIZATION_SUCCESS:
        return { ...state, currentUser: action.payload };

    case CHECK_AUTHORIZATION_FAILURE:
        return { ...state, error: action.payload, currentUser: null };

    case LOG_OUT_SUCCESS:
      return { ...state };

    case LOG_OUT_FAILURE:
      return { ...state, error: action.payload };

    default: return state;
  }
};

export default users;
