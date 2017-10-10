import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { recipes } from './recipes.reducer';
import { alert } from './alert.reducer';
import { modal } from './modal.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  recipes,
  modal,
  alert
});

export default rootReducer;
