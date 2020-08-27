import React, { useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import Line from './Line';
import Mark from './Mark';
import Spinner from '../Spinner';
import Rating from './Rating';
import BottomPanel from './BottomPanel';


import {
  getCurrentBookAsync,
  checkBookAsync,
  getBooksRatingAsync
} from '../../store/actions/books';
import { checkAuthorizationAsync } from '../../store/actions/users';
import { getCommentsByBookAsync, getCommentsLikesAsync } from '../../store/actions/comments';


const CurrentBook = ({ match: { params : { bookId } } }) => {
  const dispatch = useDispatch();
  const currentBook = useSelector(store => store.books.currentBook);
  const showSpinner = useSelector(store => store.spinner.show);
  const currentUser = useSelector(store => store.users.currentUser);
  const comments = useSelector(store => store.comments.comments);
  const rates = useSelector(store => store.books.rates);

  const ratesForCurrentBook = rates[bookId] || [];
  const averageRating = !!ratesForCurrentBook?.length
    ? (ratesForCurrentBook.reduce((acc, elem) => acc + elem.rate, 0) / ratesForCurrentBook.length).toFixed(1)
    : 0;
  const userRating = !!ratesForCurrentBook?.length &&
    ratesForCurrentBook.find(elem => elem.user === currentUser?.id);

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(checkBookAsync({ bookId, userId: currentUser?.id }));
      dispatch(getBooksRatingAsync());
    }
  }, [bookId, currentUser, dispatch]);

  useEffect(() => {
    dispatch(checkAuthorizationAsync());
    dispatch(getCurrentBookAsync(bookId));
    dispatch(getCommentsByBookAsync(bookId));
    dispatch(getCommentsLikesAsync(bookId));
  }, [bookId, dispatch]);

  return (
    <div className="current-book">
      {
        showSpinner
          ? <Spinner/>
          : <>
              <div className="current-book__top">
                <img
                  src={currentBook?.image}
                  alt={currentBook?.title}
                  className="current-book__poster"
                />

                <div className="current-book__info">
                  <div className="current-book__info-top">
                    <Line
                      title="Автор"
                      info={currentBook?.author?.name}
                      authorId={currentBook?.author?.id}
                    />
                    <Line title="Название" info={currentBook?.title}/>
                    <Line title="Жанры" info={currentBook?.genres}/>
                    <Line title="Год" info={currentBook?.publishing}/>
                    <Line title="Издательство" info={currentBook?.publisher}/>
                    <Line title="Средний рейтинг" info={averageRating}/>
                    <Rating
                      userRating={userRating?.rate || 0}
                      bookId={bookId}
                      userId={currentUser?.id}
                    />
                  </div>

                  <div className="current-book__info-bottom">
                    <Mark bookId={bookId}/>
                  </div>
                </div>
              </div>

              <div className="current-book__bottom">
                <p className="current-book__story">{currentBook?.story}</p>
              </div>

              <BottomPanel
                comments={comments}
                bookId={bookId}
                user={currentUser}
                rates={rates}
              />
            </>
      }
    </div>
  );
}

export default CurrentBook;
