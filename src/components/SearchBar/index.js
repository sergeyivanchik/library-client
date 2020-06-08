import React from 'react';
import { useDispatch } from  'react-redux';

import './index.scss';

import { Input } from 'antd';

import Message from '../Message';

import { searchBooks } from '../../store/actions/books';


const SearchBar = ({ books }) => {
  const dispatch = useDispatch();

  const search = (allBooks, value) => {
    const result =
      allBooks &&
      !!allBooks.length &&
      allBooks.filter(book => book.title.toLowerCase().includes(value.toLowerCase()));

    if (result && !!result.length) {
      value && Message('success', 'Книги найдены!');
      dispatch(searchBooks(result));
    } else {
      Message('warning', 'Поиск не дал результатов!');
    }
  };

  return (
    <div className='search-bar'>
      <Input.Search
        placeholder="search books"
        onSearch={value => search(books, value)}
      />
    </div>
  );
}

export default SearchBar;
