import React from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import { Pagination } from 'antd';

import { setCurrentNumber } from '../../store/actions/pagination';


const BooksPagination = () => {
  const dispatch = useDispatch();
  const currentNumber = useSelector(store => store.pagination.currentNumber);
  const totalNumber = useSelector(store => store.pagination.totalNumber);
  const books = useSelector(store => store.books.bookList);
  const foundedBooks = useSelector(store => store.books.foundedBooks);

  return (
    <div className='pagination'>
      <Pagination
        defaultCurrent={1}
        current={currentNumber}
        pageSize={totalNumber}
        total={(foundedBooks && foundedBooks.length) || (books && books.length)}
        onChange={pageNumber => dispatch(setCurrentNumber(pageNumber))}
      />
    </div>
  );
}

export default BooksPagination;
