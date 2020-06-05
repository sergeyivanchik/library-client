import {
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAILURE,
  GET_AUTHORS,
  GET_CURRENT_AUTHOR_SUCCESS,
  GET_CURRENT_AUTHOR_FAILURE,
  GET_CURRENT_AUTHOR
} from '../consts/authors';


export const getAuthorsSuccess = data => ({
  type: GET_AUTHORS_SUCCESS,
  payload: data
});

export const getAuthorsFailure = error => ({
  type: GET_AUTHORS_FAILURE,
  payload: error
});

export const getAuthorsAsync = () => ({
  type: GET_AUTHORS
});

export const getCurrentAuthorSuccess = data => ({
  type: GET_CURRENT_AUTHOR_SUCCESS,
  payload: data
});

export const getCurrentAuthorFailure = error => ({
  type: GET_CURRENT_AUTHOR_FAILURE,
  payload: error
});

export const getCurrentAuthorAsync = authorId => ({
  type: GET_CURRENT_AUTHOR,
  payload: authorId
});
