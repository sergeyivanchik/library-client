import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import { Card, Popover } from 'antd';

import PopoverContent from '../PopoverContent';

const AuthorBook = ({ book }) => {
  const { title, id, image } = book;

  return (
    <div className='author-book'>
      <Popover content={<PopoverContent title={title}/>}>
        <Link to={`/book/${id}`}>
          <Card
            hoverable
            cover={
              <img alt="img" src={image}/>
            }
          >
        </Card>
      </Link>
    </Popover>
  </div>
  );
}

export default AuthorBook;
