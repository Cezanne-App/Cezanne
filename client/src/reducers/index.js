import { combineReducers } from 'redux';
import bidModal from './bidModal';

const rootReducer = combineReducers({
  bidModal: bidModal
});

export default rootReducer;