import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { getJokeAsync } from "./jokeApi";

export enum Status {
  IDEL = "idle",
  LOADING = "loading",
  FAILED = "failed",
}
export interface Jokes {
  value: string;
  status: Status;
}
const initialState: Jokes = {
  value: "",
  status: Status.IDEL,
};

export const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    setJoke: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJokeAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getJokeAsync.fulfilled, (state, action) => {
        state.status = Status.IDEL;
        state.value = action.payload;
      })
      .addCase(getJokeAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export const { setJoke } = jokeSlice.actions;

export const selectJoke = (state: RootState) => state.joke.value;
export const selectJokeStatus = (state: RootState) => state.joke.status;


export default jokeSlice.reducer;
