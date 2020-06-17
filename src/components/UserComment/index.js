import React from 'react';

import './index.scss';

import { Comment, Avatar } from 'antd';

import Author from './author';
import CommentDate from './date';
import Message from './message';


const UserComment = ({ comment }) => {

  return (
    <Comment
      author={
        <Author author={comment.user.username}/>
      }
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
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
  );
}

export default UserComment;
