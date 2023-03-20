import counterReducer from './counter-slice';
import authReducer from './auth-slice';
import todoReducer from './todo-slice'
import { configureStore } from '@reduxjs/toolkit';






//reducer function

//redux toolkit will automatically clone the existing state, so we seems to be able to mutate the state directly


//createStore(counterSlice.reducer) problem if use this in large application 
//because we are only able to pass 1 reducer per slice

//instead use configureStore, which helps merging multiple reducers into one reducer

// console.log(counterSlice.actions) //actions is an object full of keys (method) that created
//actions creator will create an action based on the key



const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        todo: todoReducer,
    }
}) 
//point to reducer function
// console.log(counterSlice.reducer)

export default store