import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

//this is our store

export default combineReducers({
  charsReducer
});
