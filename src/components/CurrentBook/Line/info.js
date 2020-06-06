import React from 'react';
import { Link } from 'react-router-dom';

import './info.scss';


const Info = ({ info, authorId }) => {
  const data = info && Array.isArray(info)
  ? info.map((elem, index) =>
    index < info.length - 1
      ? `${elem}, `
      : elem
    )
  : info;

  return (
      <span className="info">
        {
          authorId
            ? <Link to={`/author/${authorId}`}>{data}</Link>
            : data
        }
      </span>
  );
}

export default Info;
