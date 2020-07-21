import React, { useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';

import Line from './Line';
import Mark from './Mark';
import Spinner from '../Spinner';
import UserComment from '../UserComment';
import AddCommentForm from '../AddCommentForm';
import Rating from './Rating';

import {
  getCurrentBookAsync,
  checkBookAsync,
  getBookRatingAsync
} from '../../store/actions/books';
import { checkAuthorizationAsync } from '../../store/actions/users';
import { getCommentsByBookAsync } from '../../store/actions/comments';


const CurrentBook = ({ match: { params : { bookId } } }) => {
  const dispatch = useDispatch();
  const currentBook = useSelector(store => store.books.currentBook);
  const showSpinner = useSelector(store => store.spinner.show);
  const currentUser = useSelector(store => store.users.currentUser);
  const comments = useSelector(store => store.comments.comments);
  const averageRating = useSelector(store => store.books.averageRating);
  const userRating = useSelector(store => store.books.userRating);

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(checkBookAsync({ bookId, userId: currentUser?.id }));
      dispatch(getBookRatingAsync({ userId: currentUser?.id, bookId }));
    }
  }, [currentUser?.id]);

  useEffect(() => {
    dispatch(checkAuthorizationAsync());
    dispatch(getCurrentBookAsync(bookId));
    dispatch(getCommentsByBookAsync(bookId));
  }, []);

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
                      userRating={userRating}
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

              <AddCommentForm bookId={bookId} user={currentUser}/>

              {
                !!comments?.length &&
                comments.map(comment => {
                  return <UserComment comment={comment} key={comment?.id}/>;
                })
              }
            </>
      }
    </div>
  );
}

export default CurrentBook;
