import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export enum Status {
    IDLE = "idle",
    LOADING = "loading",
    FAILED = "failed",
}
export interface Message {
    text: string;
    status: Status;
    id: any;
}
export interface MessageState {
    value: Array<Message>;
}

const initialState: MessageState = {
    value: [],
};


export const textSlice = createSlice({
    name: "inputText",
    initialState,
    reducers: {
        setText: (state: any, action: any) => {
            state.value = [...state.value, { text: action.payload, status: Status.IDLE, id: uuidv4() }];
        },
        deleteText: (state: any, action: any) => {
            state.value = state.value.filter((item: any) => item.id !== action.payload);
        },
        updateText: (state: any, action: any) => {
            state.value = state.value.map((item: any) =>  item.id === action.payload.id ? { ...item, text: action.payload.newText } : item );
        },
    }
});


export const { setText, deleteText, updateText } = textSlice.actions;
export default textSlice.reducer;