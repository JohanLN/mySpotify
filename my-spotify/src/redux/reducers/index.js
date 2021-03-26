import { combineReducers } from 'redux';
import user from './user';

const rootReducers = combineReducers({
    user: user
});

export default rootReducers;