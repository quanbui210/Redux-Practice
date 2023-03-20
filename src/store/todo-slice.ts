import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


type Todo = {
    title: string
}

type TodoState = {
    isLoading: boolean,
    error: null | string,
    items: Todo[]
}

const initialState: TodoState = {
    isLoading: false,
    error: null,
    items: []
}

export const fetchTodosThunk = createAsyncThunk(
    'todos/fetch',
    async () => {
        const req = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const todos = await req.json()
        return {
            todos,
            error: null,
        }
    }
)

//dont need to create actions
export const todoSlice = createSlice({
    name: 'todos', //must be unique
    initialState: initialState,
    //SYNC data flow
    reducers: {
        //key: action, value: reducer
        //increment: (state) => {
        //     state.value += 1
        // }
    },
    //ASYNC data flow
    extraReducers: (builder) => {
        //builder 
        builder.addCase(fetchTodosThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchTodosThunk.rejected, (state) => {
            state.isLoading = false
            state.error = "Something went wrong"
        })
        builder.addCase(fetchTodosThunk.fulfilled, (state, action) => {
            state.isLoading = false
            console.log("Rq has fulfilled")
            state.items = action.payload.todos
        })
    }
})



export default todoSlice.reducer