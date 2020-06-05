import React from 'react';
import { useSelector } from  'react-redux';

import './index.scss';

import BookCard from '../BookCard';


const BookCardList = ({ books }) => {
  const currentNumber = useSelector(store => store.pagination.currentNumber);
  const totalNumber = useSelector(store => store.pagination.totalNumber);

  const getCurrentData = (number, allBooks) => {
    const beginIndex = (number - 1) * totalNumber;
    const endIndex = number * totalNumber;

    return (
      allBooks &&
      allBooks.length &&
      allBooks.slice(beginIndex, endIndex)
    );
  }

  return (
    <div className="book-card-list">
      {
        books &&
        !!books.length &&
        getCurrentData(currentNumber, books).map((book, index) => {
          return (
            <BookCard
              key= {index}
              image={book.image}
              author={book.author}
              title={book.title}
              bookId={book.id}
            />
          )
        })
      }
    </div>
  );
}

export default BookCardList;
