import io from 'socket.io-client';
import { baseURL } from './baseURL';

const socket = io(baseURL);

const socketConfig = dispatch => {
  socket.on('connect', () => {
    console.log('User сonnected!');
  });

  return socket;
}

export const sendToServer = data => socket.emit('sendToServer', {...data});


export default socketConfig;
