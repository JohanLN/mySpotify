import counterReducers from './counter';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    counterReducers: counterReducers
});

export default rootReducers;