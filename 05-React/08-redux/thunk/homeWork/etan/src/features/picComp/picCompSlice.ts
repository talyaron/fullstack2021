import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {getPicAsync} from '../picComp/picCompApi'

export enum status {
    IDLE = 'idle',
    LOADING = 'loading',
    FAILED = 'failed',
}

export interface picState {
  pic: string;
  status: status;
}

const initialState: picState = {
  pic: '',
  status: status.IDLE,
};


export const picCompSlice = createSlice({
  name: 'pic',
  initialState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPicAsync.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(getPicAsync.fulfilled, (state:any, action) => {
        state.status = status.IDLE;
        console.log(action.payload, 'payLoad');
        
        state.pic = action.payload;
      })
      .addCase(getPicAsync.rejected, (state) => {
        state.status = status.FAILED;
      });
  },
});

// export const { increment } = picCompSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPic = (state: RootState) => state.picComp.pic;
export const selectPicStatus = (state: RootState) => state.picComp.status;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default picCompSlice.reducer;
