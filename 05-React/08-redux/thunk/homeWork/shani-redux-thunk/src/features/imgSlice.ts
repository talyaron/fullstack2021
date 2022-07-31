import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { fetchImg } from './imgAPI';

export enum Status{
  IDLE='idle',
  LOADING= 'loading',
  FAILED= 'failed'
}
export interface ImgState {
  gif: string;
  status: Status;
}

const initialState: ImgState = {
  gif: "",
  status: Status.IDLE,
};

export const incrementAsync = createAsyncThunk(
  'img/fetchGif',
  async (amount: number) => {
    const response = await fetchImg(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const imgSlice = createSlice({
  name: 'img',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setImg:(state,action:PayloadAction<string>)=>{
        state.gif=action.payload
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = Status.IDLE;
        state.gif += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export const { setImg } =imgSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectImg = (state: RootState) => state.img.gif;
export const selectImgStatus=(state:RootState)=>state.img.status
//state.IMG the img is from the store


export default imgSlice.reducer;
