import React from 'react';
import moment from 'moment';

import './date.scss';

import { Tooltip } from 'antd';


const CommentDate = ({ date }) => {
  return (
    <Tooltip title={moment(date).format('YYYY-MM-DD HH:mm:ss')}>
      <span className='comment-date'>
        {moment(date).fromNow()}
      </span>
    </Tooltip>
  );
}

export default CommentDate;
