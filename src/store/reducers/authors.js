import {
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAILURE,
  GET_CURRENT_AUTHOR_SUCCESS,
  GET_CURRENT_AUTHOR_FAILURE
} from '../consts/authors';

const initialState = {
  authorList: [],
  currentAuthor: null,
  error: ''
};

const authors = (state = initialState, action) => {
  switch(action.type) {
    case GET_AUTHORS_SUCCESS:
      return { ...state, authorList: action.payload };

    case GET_AUTHORS_FAILURE:
      return { ...state, error: action.payload };

    case GET_CURRENT_AUTHOR_SUCCESS:
      return { ...state, currentAuthor: action.payload };

    case GET_CURRENT_AUTHOR_FAILURE:
      return { ...state, error: action.payload };

    default: return state;
  }
};

export default authors;
