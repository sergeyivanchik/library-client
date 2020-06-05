import React from 'react';

import './title.scss';


const Title = ({ title }) => {
  return (
      <span className="title">{title}:</span>
  );
}

export default Title;