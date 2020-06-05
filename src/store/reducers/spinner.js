import { SHOW_SPIN, HIDE_SPIN } from '../consts/spinner';

const initialState = {
  show: false
};

const spinner = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_SPIN:
      return { ...state, show: true};

    case HIDE_SPIN:
      return { ...state, show: false};

    default: return state;
  }
};

export default spinner;
