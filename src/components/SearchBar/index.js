import React from 'react';
import { useDispatch } from  'react-redux';

import './index.scss';

import { Input } from 'antd';

import { searchBooks } from '../../store/actions/books';


const SearchBar = ({ books }) => {
  const dispatch = useDispatch();

  const search = (allBooks, value) => {
    const result =
      !!allBooks?.length &&
      allBooks.filter(book => book.title.toLowerCase().includes(value.toLowerCase()));

    !!result?.length
      ? dispatch(searchBooks(result))
      : dispatch(searchBooks([]));
  };

  return (
    <div className='search-bar'>
      <Input.Search
        placeholder="search books"
        onChange={e => search(books, e.target.value)}
        onSearch={value => search(books, value)}
      />
    </div>
  );
}

export default SearchBar;
