import React, { useState } from 'react';

import './editor.scss';

import { Form, Button, Input } from 'antd';

import { sendToServer } from '../../configs/socket';


const Editor = ({ bookId, user }) => {
  const [comment, setComment] = useState('');

  const handleClick = () => {
    if (comment) {
      sendToServer({
        user: user && user.id,
        book: bookId,
        date: Date.now(),
        comment
      });
    };

    setComment('');
  };

  return (
    <>
      <Form.Item>
        <Input.TextArea rows={4} onChange={e => setComment(e.target.value)} value={comment} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={handleClick} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
}

export default Editor;