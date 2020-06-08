import React, { useState } from 'react';
import { useDispatch } from  'react-redux';

import './index.scss';

import { Button, Input } from 'antd';

import Message from '../../Message';

import { signUpAsync } from '../../../store/actions/users';
import { hideSignupForm, showLoginForm } from '../../../store/actions/forms';


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const clearFields = () => {
    setEmail('');
    setConfirmPassword('');
    setUsername('');
    setPassword('');
  };

  const handleSignupClick = () => {
    if (!username || !password || !email || !confirmPassword) {
      Message('error', 'Заполните все поля!');
    } else if (password && confirmPassword && confirmPassword !== password) {
      Message('error', 'Пароли не совпадают!');
    } else {
      dispatch(signUpAsync({ username, password, email }));
      clearFields();
    };
  };

  const handleCancelClick = () => {
    dispatch(hideSignupForm());
    clearFields();
  };

  return (
    <div className="signup-form">
      <div className="signup-form__title">
        <span>Регистрация</span>
        <span onClick={() => dispatch(showLoginForm())}>
          Авторизация
        </span>
      </div>

      <Input
        placeholder='input email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
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
      <Input.Password
        placeholder='confirm password'
        visibilityToggle={false}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />

      <div className="signup-form__buttons">
        <Button onClick={handleSignupClick}>
          Регистрация
        </Button>

        <span
          className="signup-form__cancel"
          onClick={handleCancelClick}
        >
          Отмена
        </span>
      </div>
    </div>
  );
}

export default SignupForm;
