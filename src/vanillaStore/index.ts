import {legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers/counterAction';
import authReducer from './reducers/authReducer';
import { countriesReducer } from './reducers/countries';
import thunk from 'redux-thunk';
import todosReducer from '../store/todo-slice'

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    countries: countriesReducer,
    todos: todosReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store