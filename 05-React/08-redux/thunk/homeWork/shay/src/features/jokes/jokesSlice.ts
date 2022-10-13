import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { getJokeAsync } from "./jokeApi";
export enum status{
    IDLE = 'idle',
    lOADING ='loading',
    FAILED = 'failed'
}
export interface Jokes {
    value: string;
  status: status;
    
}

const initialState: Jokes = {
    value: '',
    status: status.IDLE,
   
};



export const jokeSlice = createSlice({
    name: 'joke',
    initialState,

   
    reducers: {
        setJokes: (state, action: PayloadAction<string>)  => {
            console.log(state.value, action.payload);
            
            state.value = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getJokeAsync.pending, (state) => {
                state.status = status.lOADING;
            })
            .addCase(getJokeAsync.fulfilled, (state, action) => {
                state.status = status.IDLE;
                state.value = action.payload;
            })
            .addCase(getJokeAsync.rejected, (state) => {
                state.status = status.FAILED;
            });
    },
});

export const {setJokes} = jokeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectJoke = (state: RootState) => state.joke.value;
export const selectJokeStatus = (state: RootState) => state.joke.status;


export default jokeSlice.reducer;
