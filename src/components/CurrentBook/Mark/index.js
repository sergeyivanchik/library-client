import React from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './index.scss';
import checkedMark from '../../../img/checkedMark.png';
import uncheckedMark from '../../../img/uncheckedMark.png';

import { Popover } from 'antd';

import PopoverContent from '../../PopoverContent';

import { selectBookAsync } from '../../../store/actions/books';
import { checkAuthorizationAsync } from '../../../store/actions/users';


const Mark = ({ bookId }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector(store => store.books.isChecked);
  const currentUser = useSelector(store => store.users.currentUser);

  return (
    <Popover content={<PopoverContent title={isChecked ? "Удалить" : "Добавить"}/>}>
        <img
          alt='mark'
          src={isChecked ? checkedMark : uncheckedMark}
          className="mark"
          onClick={() => {
            dispatch(checkAuthorizationAsync());
            currentUser?.id &&
            dispatch(selectBookAsync({ bookId, userId: currentUser.id }));
          }}
        />
    </Popover>
  );
}

export default Mark;
