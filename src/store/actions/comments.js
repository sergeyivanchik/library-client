import {
  GET_COMMENTS_BY_BOOK_SUCCESS,
  GET_COMMENTS_BY_BOOK_FAILURE,
  GET_COMMENTS_BY_BOOK
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
