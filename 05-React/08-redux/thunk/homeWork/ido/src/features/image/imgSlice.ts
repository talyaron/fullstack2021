import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchImg } from "./imgAPI";
import { RootState, AppThunk } from "../../app/store";

export enum Status {
  IDEL ="idle",
  LOADING ="loading",
  FAILED = "failed"
} 

export interface ImgState {
  value: string;
  status: Status;
}

const initialState: ImgState = {
  value: " ",
  status: Status.IDEL,
};

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(getImageAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
export const getImageAsync = createAsyncThunk(
  "counter/fetchCount",
  async () => {
   
    const response = await fetchImg();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const imgSlice = createSlice({
  name: "img",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeImg: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImageAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getImageAsync.fulfilled, (state, action) => {
        state.status =Status.IDEL;
        state.value = action.payload;
      })
      .addCase(getImageAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export const { changeImg } = imgSlice.actions;

export const selectedImage = (state: RootState) => state.img.value;
export const imgStatus = (state: RootState) => state.img.status;

export default imgSlice.reducer;
