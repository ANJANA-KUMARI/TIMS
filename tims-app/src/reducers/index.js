import { combineReducers } from 'redux';
import { subjects } from './subjectReducer';
import { ui } from './uiReducer';

export default combineReducers({
  subjects,
  ui
});
