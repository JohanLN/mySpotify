import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/index';

export const storage = createStore(
    rootReducers,
    applyMiddleware(thunk),  
);