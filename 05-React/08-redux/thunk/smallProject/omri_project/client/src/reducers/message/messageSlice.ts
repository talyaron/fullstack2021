import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed'
}
export interface message {
  text: string,
  status: Status
}
export interface MessageState {
  value: Array<message>;
}

const initialState: MessageState = {
  value: [{ text: '', status: Status.IDLE }],
};


export const messageSlice = createSlice({
  name: 'messasge',
  initialState,
  reducers: {
    addMessage: (state: any, action: PayloadAction<string>) => {
      if (state.value !== '') {
         state.value = [...state.value, { text: action.payload, state: Status.IDLE }];
      }
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

export const { addMessage } = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message.value;


export default messageSlice.reducer;
