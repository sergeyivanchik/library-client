import {
  GET_COMMENTS_BY_BOOK_SUCCESS,
  GET_COMMENTS_BY_BOOK_FAILURE
} from '../consts/comments';

const initialState = {
  comments: [],
  error: ''
};

const comments = (state = initialState, action) => {
  switch(action.type) {
  case GET_COMMENTS_BY_BOOK_SUCCESS:
    return { ...state, comments: action.payload };

  case GET_COMMENTS_BY_BOOK_FAILURE:
    return { ...state, error: action.payload };

  default: return state;
  }
};

export default comments;
