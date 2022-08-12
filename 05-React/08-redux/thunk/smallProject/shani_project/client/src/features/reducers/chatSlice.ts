import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { v4 as uuidv4 } from "uuid";
import { getMessages } from './chatApi';

//the thunk i use here in order to get the data

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}
export interface Message {
  text: string;
  id: any;
}
export interface MessageState {
  value: Array<Message>;
  status:Status
}

const initialState: MessageState = {
  value: [],
  status:Status.IDLE
};

export const chatSlice = createSlice({
  //messages is the name we will get for this route of reducer :messages/getText
  name: "messages",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
      //the old messages saved,then the new one added
      state.value = [
        ...state.value,
        { text: action.payload, id: uuidv4()},
      ];
    },
    deleteText: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    editText: (state, action: PayloadAction<any>) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.updatedText }
          : item
      );
    },
  },
  //builder creates the thunks/extra reducers that are async
  extraReducers: (builder) => {
    builder
    .addCase(getMessages.pending, (state) => {
      state.status = Status.LOADING;
    })
    .addCase(getMessages.fulfilled, (state, action) => {
      state.status = Status.IDLE;      
      state.value = action.payload;
      console.log(state.value)
      
    })
    .addCase(getMessages.rejected, (state) => {
      state.status = Status.FAILED;
    });
  },
});

export const { addText, deleteText, editText } = chatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

//chat is an object and inside text and status
export const selectMessage = (state: RootState) => state.chat.value;
//export const selectMessageStatus = (state: RootState) => state.chat.value.status;

//state.chat the chat is from the store

export default chatSlice.reducer;
