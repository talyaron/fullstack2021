import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchText } from './textAPI';
import { RootState, AppThunk } from '../../app/store';

export interface TextState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TextState = {
  value: " ",
  status: 'idle',
};

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (text: string) => {
    const response = await fetchText(text);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const textSlice = createSlice({
  name: 'text',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    textAdd: (state,action) => {
     
      state.value += action.payload;
    },
    deleteText: (state) => {
     
      state.value = " ";
    },
}});

export const { textAdd,deleteText} = textSlice.actions;

export const selectText = (state: RootState) => state.text.value;


export default textSlice.reducer;
