import { combineReducers } from 'redux';
import investors from './investors';
import auth from './auth';

export default combineReducers({
    investors,
    auth
});