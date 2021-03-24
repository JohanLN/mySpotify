import counterReducers from './counter';
import userCredentialsReducer from './userCredentialsReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    counterReducers: counterReducers,
    userCredentialsReducer: userCredentialsReducer
});

export default rootReducers;