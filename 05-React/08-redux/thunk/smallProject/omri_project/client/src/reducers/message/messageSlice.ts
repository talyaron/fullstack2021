import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';


export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed'
}
export interface message {
  text: string,
  id: any,
  status: Status
}
export interface MessageState {
  value: Array<message>;
}

const initialState: MessageState = {
  value: [],
};


export const messageSlice = createSlice({
  name: 'messasge',
  initialState,
  reducers: {
    addMessage: (state: any, action: PayloadAction<string>) => {
      if (state.value !== '') {
        state.value = [...state.value, { text: action.payload, id: uuidv4(), state: Status.IDLE }];
      }
    },

    deleteMessage: (state: any, action: PayloadAction<any>) => {
      state.value = action.payload.messages.filter((message:any) => message.id !==action.payload.id)
    }
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     })
  //     .addCase(incrementAsync.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // },
});

export const { addMessage, deleteMessage } = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message.value;


export default messageSlice.reducer;
