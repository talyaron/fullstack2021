import { createSlice } from "@reduxjs/toolkit";

interface TextInsert{
    value:String
}

export const textSlice = createSlice({
    name: "inputText",
    initialState:  {
        value: "..."
    },
    reducers: {
        changeText: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {changeText}=textSlice.actions
export default textSlice.reducer