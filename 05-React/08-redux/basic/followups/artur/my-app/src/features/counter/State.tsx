import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: "inputText",
    initialState: {
        textInsert: "..."
    },
    reducers: {
        changeText: (state, action) => {
            state.textInsert = action.payload;
        }
    }
})

export const {changeText}=textSlice.actions
export default textSlice.reducer