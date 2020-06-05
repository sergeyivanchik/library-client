import { message } from 'antd';

const Message = (type, text) => {
  message[type](text);
};

export default Message;
