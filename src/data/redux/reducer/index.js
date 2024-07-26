import {combineReducers} from '@reduxjs/toolkit';
import userDataReducer from './userData';

export default combineReducers({
  userData: userDataReducer,
});
