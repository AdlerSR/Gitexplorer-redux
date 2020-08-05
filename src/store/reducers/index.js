import { combineReducers } from 'redux';

import user from './user.reducer';
import popup from './popup.reducer';

export default combineReducers({
  user,
  popup,
});
