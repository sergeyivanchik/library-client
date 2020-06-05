import { SHOW_SPIN, HIDE_SPIN } from '../consts/spinner';

export const showSpin = () => ({
  type: SHOW_SPIN
});

export const hideSpin = () => ({
  type: HIDE_SPIN
});
