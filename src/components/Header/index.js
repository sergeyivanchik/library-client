import React from 'react';

import './index.scss';

import Title from './title';
import User from './user';


const Header = () => {
  return (
    <div className="header">
      <Title/>
      <User/>
    </div>
  );
}

export default Header;
