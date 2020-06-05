import React, { useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import Spinner from '../Spinner';
import AuthorBookList from '../AuthorBookList';

import { getCurrentAuthorAsync } from '../../store/actions/authors';
import { getBooksByAuthorAsync } from '../../store/actions/books';

const CurrentAuthor = ({ match: { params : { authorId } } }) => {
  const dispatch = useDispatch();
  const currentAuthor = useSelector(store => store.authors.currentAuthor);
  const booksByAuthor = useSelector(store => store.books.bookList);
  const showSpinner = useSelector(store => store.spinner.show);

  useEffect(() => {
    dispatch(getCurrentAuthorAsync(authorId));
    dispatch(getBooksByAuthorAsync(authorId))
  }, [dispatch, authorId]);

  return (
    <div className='current-author'>
      {
        showSpinner
          ? <Spinner/>
          : <>
              <img alt='author' src={currentAuthor && currentAuthor.photo}/>
              {currentAuthor && currentAuthor.name}
            </>
      }

      <AuthorBookList books={booksByAuthor}/>
    </div>
  );
}

export default CurrentAuthor;
