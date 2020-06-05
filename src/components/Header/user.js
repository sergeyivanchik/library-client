import React from 'react';
import { useDispatch, useSelector } from  'react-redux';

import './user.scss';

import login from '../../img/login.png';
import user from '../../img/user.png';

import {
  logInAsync,
  logOut
} from '../../store/actions/users';


const User = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(store => !!store.users.currentUser);

  const handleLoginClick = () => {
    if (!isAuthorized) {
      dispatch(logInAsync({ username: 'Admin', password: '9874123' }));
    } else {
      dispatch(logOut());
    };
  };

  return (
    <img
      alt='auth'
      src={isAuthorized ? user : login}
      className='user'
      onClick={handleLoginClick}
    />
  );
}

export default User;
