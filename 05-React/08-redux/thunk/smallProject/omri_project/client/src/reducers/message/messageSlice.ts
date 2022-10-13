import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';
import { getMessages } from './messageAPI';


export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed'
}
export interface message {
  text: string,
}
// export interface MessageState {
//   value: Array<message>,
//   status: Status
// }

export interface MessageState {
  value: [],
  status: Status
}

const initialState: MessageState = {
  value: [],
  status: Status.IDLE
};


export const messageSlice = createSlice({
  name: 'messasge',
  initialState,
  reducers: {
    // addMessage: (state: any, action: PayloadAction<string>) => {
    //   if (state.value !== '') {
    //     state.value = [...state.value, { text: action.payload, id: uuidv4() }];
    //   }
    // },

    // deleteMessage: (state: any, action: PayloadAction<any>) => {
    //   state.value = action.payload.messages.filter((message: any) => message.id !== action.payload.id)
    //   state.value = state.value.filter((message:any) => message.id !== action.payload);
    // }
  },

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
      });
  },
});

export const {   } = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message.value;

export default messageSlice.reducer;
