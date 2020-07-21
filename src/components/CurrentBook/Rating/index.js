import React from 'react';
import { useDispatch } from  'react-redux';

import './index.scss';

import { Rate } from 'antd';

import { sendRatingToServer } from '../../../configs/socket';

import { setBookUserRating } from '../../../store/actions/books';


const Rating = ({ userRating, userId, bookId }) => {
  const dispatch = useDispatch();

  return (
    <div className="rating">
      <span className="rating__title">Ваш рейтинг:</span>
      <Rate
        value={userRating}
        onChange={value => {
          dispatch(setBookUserRating({ userRating: value }))
          sendRatingToServer({ bookId, userId, rating: value });
        }}
      />
    </div>
  );
}

export default Rating;
