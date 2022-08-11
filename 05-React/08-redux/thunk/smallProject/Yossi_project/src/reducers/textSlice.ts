import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";



export const textSlice = createSlice({
    name: "inputText",
    initialState: {
        value: "..."
    },
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    }
});

export const { setText } = textSlice.actions;
export default textSlice.reducer;