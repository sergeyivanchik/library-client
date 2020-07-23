import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  getCommentsByBookSuccess,
  getCommentsByBookFailure,
  getCommentsLikesSuccess,
  getCommentsLikesFailure
} from '../actions/comments';


export function* getCommentsByBook({ payload }) {
  try {
    const { data } = yield call(() => axios.get(`comments/${payload}`));

    yield put(getCommentsByBookSuccess(data));
  } catch (error) {
    yield put(getCommentsByBookFailure(error));
  };
};

export function* getCommentsLikes({ payload }) {
  try {
    const { data } = yield call(() => axios.get(`comments/likes/${payload}`));

    yield put(getCommentsLikesSuccess(data));
  } catch (error) {
    yield put(getCommentsLikesFailure(error));
  };
}
