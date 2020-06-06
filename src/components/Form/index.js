import React from 'react';

import './index.scss';

import { Modal } from 'antd';

import LoginForm from './LoginForm';


const Form = ({ isShow }) => {
  return (
    <Modal
      visible={isShow}
      closable={false}
      footer={null}
    >
      <LoginForm/>
    </Modal>
  );
}

export default Form;
