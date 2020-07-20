import React from 'react';

import './index.scss';

import AuthorBook from '../AuthorBook';

const AuthorBookList = ({ books }) => {
  return (
    <div className='author-book-list'>
      {
        !!books?.length &&
        books.map((book, index) => (
          <AuthorBook key={index} book={book}/>
        ))
      }
    </div>
  );
}

export default AuthorBookList;
