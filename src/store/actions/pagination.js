import {
  SET_CURRENT_NUMBER_SUCCESS,
  SET_CURRENT_NUMBER_FAILURE,
  SET_CURRENT_NUMBER
} from '../consts/pagination';


export const setCurrentNumberSuccess = data => ({
  type: SET_CURRENT_NUMBER_SUCCESS,
  payload: data
});

export const setCurrentNumberFailure = error => ({
  type: SET_CURRENT_NUMBER_FAILURE,
  payload: error
});

export const setCurrentNumber = number => ({
  type: SET_CURRENT_NUMBER,
  payload: number
});
