import { combineReducers } from 'redux';

import books from './books';
import authors from './authors';
import pagination from './pagination';
import spinner from './spinner';
import users from './users';
import forms from './forms';

const rootReducer = combineReducers ({
  books,
  authors,
  pagination,
  spinner,
  users,
  forms
});

export default rootReducer;
