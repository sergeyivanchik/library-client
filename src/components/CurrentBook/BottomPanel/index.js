import React from 'react';

import './index.scss';

import CommentList from '../../CommentList';
import CommentsStatistic from '../../CommentsStatistic';


const BottomPanel = ({ comments, bookId, user, rates }) => {
  return (
    <div className="bottom-panel">
      <div className="bottom-panel__statistic">
        <CommentsStatistic rates={rates} bookId={bookId}/>
      </div>

      <div className="bottom-panel__comments">
        <CommentList comments={comments} bookId={bookId} user={user}/>
      </div>
    </div>
  );
}

export default BottomPanel;
