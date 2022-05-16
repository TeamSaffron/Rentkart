import { combineReducers } from 'redux';
import roomReducer from './room';
import userReducer from './user';

const reducer = combineReducers({
  userStore: userReducer,
  roomStore: roomReducer,
});

export default reducer;
