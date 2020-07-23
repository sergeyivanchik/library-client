import {
  GET_COMMENTS_BY_BOOK_SUCCESS,
  GET_COMMENTS_BY_BOOK_FAILURE,
  ADD_COMMENT,
  SET_COMMENTS_LIKES,
  GET_COMMENTS_LIKES_SUCCESS,
  GET_COMMENTS_LIKES_FAILURE
} from '../consts/comments';

const initialState = {
  comments: [],
  likes: {},
  error: ''
};

const comments = (state = initialState, action) => {
  switch(action.type) {
  case GET_COMMENTS_BY_BOOK_SUCCESS:
    return { ...state, comments: action.payload };

  case GET_COMMENTS_BY_BOOK_FAILURE:
    return { ...state, error: action.payload };

  case ADD_COMMENT:
    return { ...state, comments: [...state.comments, action.payload] };

  case SET_COMMENTS_LIKES:
    return { ...state, likes: action.payload };

  case GET_COMMENTS_LIKES_SUCCESS:
    return { ...state, likes: action.payload };

  case GET_COMMENTS_LIKES_FAILURE:
      return { ...state, error: action.payload };

  default: return state;
  }
};

export default comments;
