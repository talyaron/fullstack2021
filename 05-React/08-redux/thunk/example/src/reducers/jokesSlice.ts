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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectJoke = (state: RootState) => state.joke.value;
export const selectJokeStatus = (state: RootState) => state.joke.status;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default jokeSlice.reducer;
