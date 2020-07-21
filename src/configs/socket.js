import io from 'socket.io-client';

import { baseURL } from './baseURL';
import { addComment } from '../store/actions/comments';
import { setBookAverageRating } from '../store/actions/books';

const socket = io(baseURL);

const socketConfig = dispatch => {
  socket.on('connect', () => {
    console.log('User сonnected!');
  });

  socket.on('addComment', comment => {
    dispatch(addComment(comment));
  });

  socket.on('getRating', data => {
    dispatch(setBookAverageRating(data));
  })

  return socket;
}

export const sendCommentToServer = data => socket.emit('sendCommentToServer', {...data});
export const sendRatingToServer = data => socket.emit('sendRatingToServer', {...data});

export default socketConfig;
