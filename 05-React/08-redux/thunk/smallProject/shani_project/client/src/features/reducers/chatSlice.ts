import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { v4 as uuidv4 } from "uuid";
import { getMessages,editMessage,deleteMessage,addMessage } from './chatApi';

//the thunk i use here in order to get the data

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}
export interface Message {
  text: string;
  _id: any;
  img:any;
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
    // addText: (state, action: PayloadAction<any>) => {
    //   //the old messages saved,then the new one added
    //   //how doesnt _id here now get the text as payload ????
    //   state.value = [
    //     ...state.value,
    //     { text: action.payload, _id:action.payload.id,img:action.payload},
    //   ];
    // },
    // deleteText: (state, action: PayloadAction<string>) => {
    //   state.value = state.value.filter((item) => item._id !== action.payload);
    // },
    // editText: (state, action: PayloadAction<any>) => {
    //   state.value = state.value.map((item) =>
    //     item._id === action.payload._id
    //       ? { ...item, text: action.payload.updatedText }
    //       : item
    //   );
    // },
    // getPassText: (state, action:PayloadAction<any>) => {
    //   state.value = action.payload
    //   console.log(state.value)
    // },
   
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
     
      
    })
    .addCase(getMessages.rejected, (state) => {
      state.status = Status.FAILED;
    })
    //update
    .addCase(editMessage.pending, (state) => {
      state.status = Status.LOADING;
    })
    
    .addCase(editMessage.fulfilled, (state, action: PayloadAction<any>)=> {
      state.status = Status.IDLE;      
     state.value = state.value.map((item) =>
        item._id === action.payload._id
          ? { ...item, text: action.payload.updatedText }
          : item
      );
     
      
    })
    .addCase(editMessage.rejected, (state) => {
      state.status = Status.FAILED;
    })
   //delete
    .addCase(deleteMessage.pending, (state) => {
      state.status = Status.LOADING;
    })
    
    .addCase(deleteMessage.fulfilled, (state, action: PayloadAction<any>)=> {
      state.status = Status.IDLE;      
      state.value = state.value.filter((item) => item._id !== action.payload);
     
      
    })
    .addCase(deleteMessage.rejected, (state) => {
      state.status = Status.FAILED;
    })
    //add
    .addCase(addMessage.pending, (state) => {
      state.status = Status.LOADING;
    })
    
    .addCase(addMessage.fulfilled, (state, action: PayloadAction<any>)=> {
      state.status = Status.IDLE;      
      state.value = [
            ...state.value,
            { text: action.payload, _id:action.payload.id,img:action.payload},
          ];
     
      
    })
    .addCase(addMessage.rejected, (state) => {
      state.status = Status.FAILED;
    });
   },
   
   
});



// export const { getPassText} = chatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

//chat is an object and inside text and status
export const selectMessage = (state: RootState) => state.chat.value;
export const selectMessageStatus = (state: RootState) => state.chat.status;

//state.chat the chat is from the store

export default chatSlice.reducer;
