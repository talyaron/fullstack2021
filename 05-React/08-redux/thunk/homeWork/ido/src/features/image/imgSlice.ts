import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchImg } from './imgAPI';
import { RootState, AppThunk } from '../../app/store';

export interface ImgState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ImgState = {
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
  async (img: string) => {
    const response = await fetchImg(img);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const imgSlice = createSlice({
  name: 'img',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeImg: (state,action) => {
     
      state.value = action.payload;
    },
}});

export const { changeImg } = imgSlice.actions;

export const selectedImage = (state: RootState) => state.img.value;
export const imgStatus = (state: RootState) => state.img.status;


export default imgSlice.reducer;
