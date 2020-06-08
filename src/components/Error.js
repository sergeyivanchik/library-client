import React from 'react';
import { useDispatch } from  'react-redux';

import { Result, Button } from 'antd';

import { showLoginForm } from '../store/actions/forms';


const Error = () => {
  const dispatch = useDispatch();

  return (
    <Result
      status="403"
      title="401"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button
          type="primary"
          onClick={() => dispatch(showLoginForm())}
        >
          Авторизоваться
        </Button>}
    />
  )
};

export default Error;
