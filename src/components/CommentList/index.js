import React, { useState } from 'react';

import './index.scss';

import UserComment from '../UserComment';
import AddCommentForm from '../AddCommentForm';


const CommentList = ({ comments, bookId, user }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  return (
    <div className="comment-list">
      <span
        className="comment-list__title"
        onClick={() => setShowCommentForm(!showCommentForm)}
      >
        Оставить отзыв
      </span>

      {
        showCommentForm &&
        <AddCommentForm bookId={bookId} user={user}/>
      }

      {
        !!comments?.length &&
        comments.map(comment => {
          if (comment?.book?.id === bookId || comment?.book === bookId)
            return <UserComment comment={comment} key={comment?.id} bookId={bookId}/>;
        })
      }

    </div>
  );
}

export default CommentList;
