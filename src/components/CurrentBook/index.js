import React, { useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import Line from './Line';
import Mark from './Mark';
import Spinner from '../Spinner';

import { getCurrentBookAsync, checkBookAsync } from '../../store/actions/books';
import { checkAuthorizationAsync } from '../../store/actions/users';


const CurrentBook = ({ match: { params : { bookId } } }) => {
  const dispatch = useDispatch();
  const currentBook = useSelector(store => store.books.currentBook);
  const showSpinner = useSelector(store => store.spinner.show);
  const currentUser = useSelector(store => store.users.currentUser);

  useEffect(() => {
    currentUser &&
    currentUser.id &&
    dispatch(checkBookAsync({ bookId, userId: currentUser && currentUser.id }));
  }, [currentUser && currentUser.id]);

  useEffect(() => {
    dispatch(checkAuthorizationAsync());
    dispatch(getCurrentBookAsync(bookId));
  }, []);

  return (
    <div className="current-book">
      {
        showSpinner
          ? <Spinner/>
          : <>
              <div className="current-book__top">
                <img
                  src={currentBook && currentBook.image}
                  alt={currentBook && currentBook.title}
                  className="current-book__poster"
                />

                <div className="current-book__info">
                  <div>
                    <Line
                      title="Автор"
                      info={currentBook && currentBook.author && currentBook.author.name}
                      authorId={currentBook && currentBook.author && currentBook.author.id}
                    />
                    <Line title="Название" info={currentBook && currentBook.title}/>
                    <Line title="Жанры" info={currentBook && currentBook.genres}/>
                    <Line title="Год" info={currentBook && currentBook.publishing}/>
                    <Line title="Издательство" info={currentBook && currentBook.publisher}/>
                  </div>

                  <div>
                    <Mark bookId={bookId}/>
                  </div>
                </div>
              </div>

              <div className="current-book__bottom">
                <p className="current-book__story">{currentBook && currentBook.story}</p>
              </div>
            </>
      }
    </div>
  );
}

export default CurrentBook;
