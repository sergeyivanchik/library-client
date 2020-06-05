import React from 'react';

import './index.scss';

import Title from './title';
import Info from './info';


const Line = ({ title, info, authorId }) => {
  return (
    <div className="line">
      <Title title={title}/>
      <Info info={info} authorId={authorId}/>
    </div>
  );
}

export default Line;
