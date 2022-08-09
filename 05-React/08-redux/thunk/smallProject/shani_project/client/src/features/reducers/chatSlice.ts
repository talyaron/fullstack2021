import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
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
  value: [{ text: "", status: Status.IDLE, id: uuidv4() }],
};

export const chatSlice = createSlice({
  //messages is the name we will get for this route of reducer :messages/getText
  name: "messages",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
        //the old messages saved,then the new one added
      state.value = [...state.value,{text:action.payload,id:uuidv4(),status:Status.IDLE}]
    },
    deleteText:(state, action: PayloadAction<string>)=>{
          state.value=state.value.filter(item=>item.id!==action.payload)
    },
  },
  //builder creates the thunks/extra reducers that are async
  extraReducers: (builder) => {
    //builder
    // .addCase(getImgAsync.pending, (state) => {
    //   state.status = Status.LOADING;
    // })
    // .addCase(getImgAsync.fulfilled, (state, action) => {
    //   state.status = Status.IDLE;
    //   state.meme = action.payload;
    // })
    // .addCase(getImgAsync.rejected, (state) => {
    //   state.status = Status.FAILED;
    // });
  },
});

export const { addText,deleteText } = chatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

//chat is an object and inside text and status
export const selectMessage = (state: RootState) => state.chat.value;
//export const selectMessageStatus = (state: RootState) => state.chat.value.status;



//state.chat the chat is from the store

export default chatSlice.reducer;
