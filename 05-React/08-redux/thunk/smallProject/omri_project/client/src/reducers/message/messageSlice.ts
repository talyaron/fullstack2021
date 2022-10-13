import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface MessageState {
  value: string;
  status: Status;
}

export enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    FAILED = 'failed'
}

const initialState: MessageState = {
  value: '',
  status: Status.IDLE,
};


export const messageSlice = createSlice({
  name: 'messasge',
  initialState,
  reducers: {},
 
  extraReducers: (builder) => {
    builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   })
    //   .addCase(incrementAsync.rejected, (state) => {
    //     state.status = 'failed';
    //   });
  },
});

export const { } = messageSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;


export default messageSlice.reducer;
