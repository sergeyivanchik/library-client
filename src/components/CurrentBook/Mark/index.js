import React from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';
import checkedMark from '../../../img/checkedMark.png';
import uncheckedMark from '../../../img/uncheckedMark.png';

import { Popover } from 'antd';

import PopoverContent from '../../PopoverContent';

import { selectBookAsync } from '../../../store/actions/books';


const Mark = ({ bookId }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector(store => store.books.isChecked);

  return (
    <Popover content={<PopoverContent title={isChecked ? "Удалить" : "Добавить"}/>}>
        <img
          alt='mark'
          src={isChecked ? checkedMark : uncheckedMark}
          className="mark"
          onClick={() => dispatch(selectBookAsync({ bookId, userId: '5ed8e4696111d53bb45469d3' }))}
        />
    </Popover>
  );
}

export default Mark;
