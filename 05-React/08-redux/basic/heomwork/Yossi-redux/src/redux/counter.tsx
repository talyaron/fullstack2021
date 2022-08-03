import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 3
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmunt: (state, action) => {
            state.count += action.payload;
        }
    }
})

export const {increment, decrement, incrementByAmunt}=counterSlice.actions
export default counterSlice.reducer