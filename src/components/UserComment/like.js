import React from 'react';
import { useSelector } from  'react-redux';

import './like.scss';
import like from '../../img/like.png';
import check from '../../img/check.png';

import { sendLikeToServer } from '../../configs/socket';


const Like = ({ commentId, bookId }) => {
  const currentUser = useSelector(store => store.users.currentUser);
  const likes = useSelector(store => store.comments.likes);

  const userLike = likes &&
    likes[commentId]?.length &&
    likes[commentId].find(like => like === currentUser?.id);

  const handleClick = () => {
    if (!userLike) {
      sendLikeToServer({ userId: currentUser?.id, commentId, bookId });
    };
  };

  return (
    <div className='like'>
      {
        likes &&
        !!likes[commentId]?.length &&
        <span className='like__value'>
          {`+${likes[commentId].length}`}
        </span>
      }
        <img
          src={userLike ? check : like}
          alt='like'
          className={userLike ? 'like__check' : 'like__uncheck'}
          onClick={() => handleClick()}
        />
    </div>
  );
}

export default Like;
