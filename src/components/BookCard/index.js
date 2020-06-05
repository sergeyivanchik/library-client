import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import { Card, Popover } from 'antd';

import PopoverContent from '../PopoverContent';

const BookCard = ({ image, author, title, bookId }) => {
  return (
    <div className='card'>
      <Popover content={<PopoverContent title={title}/>}>
        <Link to={`/book/${bookId}`}>
          <Card
            hoverable
            cover={
              <img alt="img" src={image}/>
            }
          >
          <Card.Meta title={title} description={author.name} />
        </Card>
      </Link>
    </Popover>
  </div>
  );
}

export default BookCard;
