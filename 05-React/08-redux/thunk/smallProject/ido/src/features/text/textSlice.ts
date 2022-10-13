import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addText  } from './textAPI';
import { RootState, AppThunk } from '../../app/store';


export interface TextState {
  value: Array<any>;
  status: 'idle' | 'loading' | 'failed';
}

export enum Status {
  IDEL ="idle",
  LOADING ="loading",
  FAILED = "failed"
} 

const initialState: TextState = {
  value: [],
  status: Status.IDEL,
};



// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
export const setTextAsync = createAsyncThunk(
  'textList/addText',
  async (text: string) => {
    const response = await addText();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// export const setTextAsync = createAsyncThunk(
//   "textList/editText",
//   async () => {
   
//     const response = await editText();
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );

export const textSlice = createSlice({
  name: 'textList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    textAdd: (state,action) => {
     
      state.value = action.payload;
    },
    editText: (state , action) => {
     
      state.value = action.payload;
    },
},extraReducers: (builder) => {
  builder
    .addCase(setTextAsync.pending, (state) => {
      state.status = Status.LOADING;
    })
    .addCase(setTextAsync.fulfilled, (state, action) => {
      state.status = Status.IDEL;
      state.value = action.payload;
    })
    .addCase(setTextAsync.rejected, (state) => {
      state.status = Status.FAILED;
    });
},
});


export const { textAdd,editText} = textSlice.actions;

export const selectText = (state: RootState) => state.textList.value;
export const textStatus = (state: RootState) => state.textList.status;

export default textSlice.reducer;
