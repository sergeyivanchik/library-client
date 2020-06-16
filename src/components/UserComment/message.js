import React from 'react';

import './message.scss';


const Message = ({ message }) => {

  return (
    <p className='comment-message'>
      {message}
    </p>
  );
}

export default Message;
