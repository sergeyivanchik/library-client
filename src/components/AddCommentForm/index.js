import React from 'react';

import './index.scss';

import { Comment, Avatar } from 'antd';

import Editor from './editor';


const AddCommentForm = ({ bookId, user }) => {

  return (
    <Comment
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt={user && user.username}
        />
      }
      content={
        <Editor bookId={bookId} user={user}/>
      }
    />
  );
}

export default AddCommentForm;
