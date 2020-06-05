import React from 'react';
import { Link } from 'react-router-dom';

import './title.scss';


const Title = () => {
  return (
    <Link to='/'>
      <span className='header-title'>Library</span>
    </Link>
  );
}

export default Title;
