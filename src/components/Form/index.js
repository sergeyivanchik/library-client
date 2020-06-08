import React from 'react';

import './index.scss';

import { Modal } from 'antd';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


const Form = ({ isShowLoginForm, isShowSignupForm }) => {
  return (
    <Modal
      visible={isShowLoginForm || isShowSignupForm}
      closable={false}
      footer={null}
    >
      {
        (isShowLoginForm && <LoginForm/>) ||
        (isShowSignupForm && <SignupForm/>)
      }
    </Modal>
  );
}

export default Form;
