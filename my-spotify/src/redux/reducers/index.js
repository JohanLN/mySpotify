import userCredentialsReducer from './userCredentialsReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    userCredentialsReducer: userCredentialsReducer,
});

export default rootReducers;