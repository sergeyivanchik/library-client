import {
  SET_CURRENT_NUMBER_SUCCESS,
  SET_CURRENT_NUMBER_FAILURE
} from '../consts/pagination';

const initialState = {
  currentNumber: 1,
  totalNumber: 5,
  error: ''
};

const pagination = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_NUMBER_SUCCESS:
      return { ...state, currentNumber: action.payload };

    case SET_CURRENT_NUMBER_FAILURE:
      return { ...state, error: action.payload };

    default: return state;
  }
};

export default pagination;
