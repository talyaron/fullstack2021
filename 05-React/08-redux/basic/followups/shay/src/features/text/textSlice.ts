import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getValue } from '@testing-library/user-event/dist/types/utils';
import { act } from 'react-dom/test-utils';
import { RootState, AppThunk } from '../../app/store';
import { fetchGivenText } from './textApi';
export interface TextState {
    value: any;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: TextState = {
    value: '',
    status: 'idle',
};
  export const incrementAsync = createAsyncThunk('text/fetchGivenText', async (givenText: string) => {
    const response = await fetchGivenText(givenText);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
});
  export const textSlice = createSlice({
    name: 'text',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += action.payload.length;
        },
        decrement: (state, action: PayloadAction<any>) => {
            // state.value = state.value.substring(1, state.value.length - action.payload.length);
            
            state.value=action.payload;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<string>) => {
            ;
            
            state.value += action.payload;
            console.log((state.value)+` inc`)
        },
        decrementByAmount: (state, action: PayloadAction<any>) => {
            // console.log((state.value -= action.payload)+` dec`);
            state.value=action.payload;

        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // state.value += action.payload;
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});
export const {increment, decrement, incrementByAmount, decrementByAmount} = textSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.text.value)`
export const selectGivenText = (state: RootState) => state.text.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
    (amount: string): AppThunk =>
    (dispatch, getState) => {
        const currentValue = selectGivenText(getState());
        if (currentValue.length >50) {
            dispatch(incrementByAmount(amount));
        }
    };

export default textSlice.reducer;