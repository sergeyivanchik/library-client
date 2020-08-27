import {
  GET_COMMENTS_BY_BOOK_SUCCESS,
  GET_COMMENTS_BY_BOOK_FAILURE,
  GET_COMMENTS_BY_BOOK,
  ADD_COMMENT,
  SET_COMMENTS_LIKES,
  GET_COMMENTS_LIKES_SUCCESS,
  GET_COMMENTS_LIKES_FAILURE,
  GET_COMMENTS_LIKES
} from '../consts/comments';


export const getCommentsByBookSuccess = data => ({
  type: GET_COMMENTS_BY_BOOK_SUCCESS,
  payload: data
});

export const getCommentsByBookFailure = error => ({
  type: GET_COMMENTS_BY_BOOK_FAILURE,
  payload: error
});

export const getCommentsByBookAsync = bookId => ({
  type: GET_COMMENTS_BY_BOOK,
  payload: bookId
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
});

export const setCommentsLikes = data => ({
  type: SET_COMMENTS_LIKES,
  payload: data
});

export const getCommentsLikesSuccess = data => ({
  type: GET_COMMENTS_LIKES_SUCCESS,
  payload: data
});

export const getCommentsLikesFailure = error => ({
  type: GET_COMMENTS_LIKES_FAILURE,
  payload: error
});

export const getCommentsLikesAsync = data => ({
  type: GET_COMMENTS_LIKES,
  payload: data
});
