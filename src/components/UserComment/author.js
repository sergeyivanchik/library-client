import React from 'react';

import './author.scss';


const Author = ({ author }) => {
  return (
    <span className='comment-author'>
      {author}
    </span>
  );
}

export default Author;
