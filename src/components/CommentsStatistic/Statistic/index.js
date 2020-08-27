import React from 'react';

import './index.scss';
import star from '../../../img/star.png';
import filedStar from '../../../img/filedStar.png';


const Statistic = ({ count, value }) => {
  const stars = [];
  if (count) {
    for (let i = 0; i < count; i++) {
      stars.push(i);
    }
  }

  return (
    <div className='statistic'>
      <div className='statistic__star-list'>
        {
          stars?.length
            ? stars.map(elem =>
                <img
                  className='statistic__star'
                  src={filedStar}
                  alt='star'
                  key={elem}
                />
              )
            : <img
                className='statistic__star'
                src={star}
                alt='star'
                key={0}
              />
        }
      </div>

      <span className='statistic__value'>
        {value}
      </span>
    </div>
  );
}

export default Statistic;
