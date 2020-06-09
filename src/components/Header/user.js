import React from 'react';
import { useDispatch, useSelector } from  'react-redux';
import { Link } from 'react-router-dom';

import './user.scss';

import login from '../../img/login.png';
import user from '../../img/user.png';

import { logOut } from '../../store/actions/users';
import { showLoginForm } from '../../store/actions/forms';


const User = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(store => !!store.users.currentUser);

  const handleLoginClick = () => {
    if (!isAuthorized) {
      dispatch(showLoginForm());
    } else {
      dispatch(logOut());
    };
  };

  return (
    <Link to={isAuthorized && '/'}>
      <img
        alt='auth'
        src={isAuthorized ? user : login}
        className='user'
        onClick={handleLoginClick}
      />
    </Link>
  );
}

export default User;
