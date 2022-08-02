import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface TextState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TextState = {
  value: '',
  status: 'idle',
};


export const textSlice = createSlice({
  name: 'text',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   changeText: (state, action: PayloadAction<string>) => {
    state.value = action.payload;
   }
  
  },
});

export const { changeText } = textSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectText = (state: RootState) => state.text.value;

export default textSlice.reducer;
