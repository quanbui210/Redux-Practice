import { createSlice, configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true,
}


//reducer function

//redux toolkit will automatically clone the existing state, so we seems to be able to mutate the state directly
const counterSlice = createSlice({
    name: 'counter', //first, need a name
    initialState: initialCounterState, // then setup initial state (object setup before)
    reducers: { // an object with methods, synchronous reducers  
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        reset(state) {
            state.counter = 0
        },
    },
    // extraReducers for asynchronous data flow
   
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer