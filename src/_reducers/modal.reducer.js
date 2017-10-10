import { modalConstants } from '../_constants';

const initialState = { showModal: false };

export function modal(state = initialState, action) {
  switch (action.type) {
    case modalConstants.OPEN:
      return {
        showModal: true
      };
    case modalConstants.CLOSE:
      return {
        showModal: false
      };
    default:
      return state
  }
}
