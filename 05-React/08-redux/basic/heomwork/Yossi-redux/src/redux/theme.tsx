import { createSlice } from "@reduxjs/toolkit";

interface colorState {
    value: String
}
const initialStateValue: colorState = {
    value: ''
};

export const themeSlice = createSlice({
    name: "changeColor",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeColor } = themeSlice.actions
export default themeSlice.reducer