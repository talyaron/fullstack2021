import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { getImgAsync } from './imgAPI';

export enum Status{
  IDLE='idle',
  LOADING= 'loading',
  FAILED= 'failed'
}
export interface ImgState {
  meme: string;
  status: Status;
}

const initialState: ImgState = {
  meme: "",
  status: Status.IDLE,
};



export const imgSlice = createSlice({
  name: 'img',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setImg:(state,action:PayloadAction<string>)=>{
        state.meme=action.payload
    }
  },
  //builder creates the thuhnks/extra reducers that are async
  extraReducers: (builder) => {
    builder
      .addCase(getImgAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getImgAsync.fulfilled, (state, action) => {
        state.status = Status.IDLE;
        state.meme = action.payload;
      })
      .addCase(getImgAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export const { setImg } =imgSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectImg = (state: RootState) => state.img.meme;
export const selectImgStatus=(state:RootState)=>state.img.status
//state.IMG the img is from the store


export default imgSlice.reducer;
