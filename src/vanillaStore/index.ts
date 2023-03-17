import {legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './counter/counterAction';
import authReducer from './auth/authReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

const store = createStore(rootReducer)

export default store