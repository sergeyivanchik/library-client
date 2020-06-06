import { put } from 'redux-saga/effects'

import {
  setCurrentNumberSuccess,
  setCurrentNumberFailure
} from '../actions/pagination';


export function* setCurrentNumber({ payload }) {
  try {
    yield put(setCurrentNumberSuccess(payload));
  } catch (error) {
    yield put(setCurrentNumberFailure(error));
  };
};
