import { combineReducers } from 'redux';

import books from './books';
import authors from './authors';
import pagination from './pagination';
import spinner from './spinner';
import users from './users';
import forms from './forms';
import comments from './comments';

const rootReducer = combineReducers ({
  books,
  authors,
  pagination,
  spinner,
  users,
  forms,
  comments
});

export default rootReducer;
