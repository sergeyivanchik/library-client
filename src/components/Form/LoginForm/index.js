import React, { useState } from 'react';
import { useDispatch } from  'react-redux';

import './index.scss';

import { Button, Input } from 'antd';

import Message from '../../Message';

import { logInAsync } from '../../../store/actions/users';
import { hideLoginForm } from '../../../store/actions/forms';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const clearFields = () => {
    setUsername('');
    setPassword('');
  };

  const handleLoginClick = () => {
    if (username && password) {
      dispatch(logInAsync({ username, password }));
      clearFields();
    } else {
      Message('error', 'Заполните все поля!');
    };
  };

  const handleCancelClick = () => {
    dispatch(hideLoginForm());
    clearFields();
  };

  return (
    <div className="login-form">
      <div className="login-form__title">
        Вход
      </div>

      <Input
        placeholder='input username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input.Password
        placeholder='input password'
        visibilityToggle={false}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <div className="login-form__buttons">
        <Button onClick={handleLoginClick}>
          Войти
        </Button>

        <span
          className="login-form__cancel"
          onClick={handleCancelClick}
        >
          Отмена
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
