import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './textAPI';

export interface TextState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TextState = {
  value: '...',
  status: 'idle',
};

export const textSlice = createSlice({
  name: 'Text',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) =>{
      state.value = action.payload;
    }
  },

});

export const { changeText } = textSlice.actions;

export default textSlice.reducer;
