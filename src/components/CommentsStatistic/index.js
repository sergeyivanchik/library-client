import React from 'react';

import './index.scss';

import Statistic from './Statistic';


const CommentsStatistic = ({ rates, bookId }) => {
  const ratesForCurrentBook = rates[bookId] || [];

  const ratesAmount = value => {
    const amount = ratesForCurrentBook?.length &&
      ratesForCurrentBook.filter(elem => elem.rate === value);

    if (amount?.length) {
      return amount.length;
    };

    return 0;
  };

  return (
    <div className='comments-statistic'>
      <span className='comments-statistic__title'>
        Оценки
      </span>

      <Statistic count={5} value={ratesAmount(5)}/>
      <Statistic count={4} value={ratesAmount(4)}/>
      <Statistic count={3} value={ratesAmount(3)}/>
      <Statistic count={2} value={ratesAmount(2)}/>
      <Statistic count={1} value={ratesAmount(1)}/>
      <Statistic count={0} value={ratesAmount(0)}/>
    </div>
  );
}

export default CommentsStatistic;
