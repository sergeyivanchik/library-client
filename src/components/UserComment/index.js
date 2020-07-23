import React from 'react';

import './index.scss';

import { Comment, Avatar } from 'antd';

import Author from './author';
import CommentDate from './date';
import Message from './message';
import Like from './like';


const UserComment = ({ comment, bookId }) => {
  return (
    <div className='comment'>
      <Like commentId={comment?.id} bookId={bookId}/>

      <Comment
        author={
          <Author author={comment.user.username}/>
        }
        avatar={
          <Avatar
            src={
              comment.user.avatar ||
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            }
            alt={comment.user.username}
          />
        }
        content={
          <Message message={comment.comment}/>
        }
        datetime={
          <CommentDate date={new Date(+comment.date)}/>
        }
      />
    </div>
  );
}

export default UserComment;
