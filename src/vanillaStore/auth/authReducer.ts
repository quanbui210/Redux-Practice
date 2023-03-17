interface InitialState {
    isAuthenticated: boolean
}

const authState: InitialState = {
    isAuthenticated: false,
}

//PROBLEM, ALWAYS RETURN OBJECT as INITIAL STATE

// const authReducer = (state = authState, action: { type: "LOGIN" | "LOGOUT" }) => {
//     if (action.type === "LOGIN") {
//         return state.isAuthenticated = true
//     } else if (action.type === "LOGOUT") {
//         return state.isAuthenticated = false;
//     } else {
//         return state;
//     }
// }

const authReducer = (state = authState, action: { type: "LOGIN" | "LOGOUT" }) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, isAuthenticated: true };
      case "LOGOUT":
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };
  

export default authReducer