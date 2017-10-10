import { modalConstants } from '../_constants';

export const modalActions = {
  open,
  close
};

function open() {
  return { type: modalConstants.OPEN };
}

function close() {
  return { type: modalConstants.CLOSE };
}
