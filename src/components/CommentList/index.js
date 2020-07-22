import React from 'react';

import './index.scss';

import UserComment from '../UserComment';
import AddCommentForm from '../AddCommentForm';


const CommentList = ({ comments, bookId, user }) => {

  return (
    <div className="comment-list">
      <span className="comment-list__title">
        Отзывы
      </span>

      {
        !!comments?.length &&
        comments.map(comment => {
          return <UserComment comment={comment} key={comment?.id}/>;
        })
      }

      <AddCommentForm bookId={bookId} user={user}/>
    </div>
  );
}

export default CommentList;
