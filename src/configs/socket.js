import io from 'socket.io-client';

import { baseURL } from './baseURL';
import { addComment } from '../store/actions/comments';

const socket = io(baseURL);

const socketConfig = dispatch => {
  socket.on('connect', () => {
    console.log('User сonnected!');
  });

  socket.on('addComment', comment => {
    dispatch(addComment(comment));
  });

  return socket;
}

export const sendToServer = data => socket.emit('sendToServer', {...data});


export default socketConfig;
