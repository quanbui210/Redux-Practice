interface State {
    counter: number,
    showCounter: boolean
}

const initialState: State = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = initialState, action:{ type: string; payload: number; } ) => {
    switch (action.type) {
        case "INCREMENT":
          return {
            ...state,
            counter: state.counter + action.payload
          }
        case "DECREMENT":
          return {
            ...state,
            counter: state.counter - action.payload
          }
        case "TOGGLE":
          return {
            ...state,
            showCounter: !state.showCounter
          }
        case "RESET":
          return {
            ...state,
            counter: 0
          }
        default:
          return state;
      }
}

export default counterReducer;