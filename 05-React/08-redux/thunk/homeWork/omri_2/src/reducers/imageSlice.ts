import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { getImageAsync } from './imageAPI';


export interface ImageState {
    value: string;
    status: 'idle' | 'loading' | 'failed';
}

export enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    FAILED = 'failed'
}

const initialState: ImageState = {
    value: '',
    status: Status.IDLE,
};


export const imageSlice = createSlice({
    name: 'image',
    initialState,

    reducers: {
        setImage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getImageAsync.pending, (state) => {
                state.status = Status.LOADING;;
            })
            .addCase(getImageAsync.fulfilled, (state, action) => {
                state.status = Status.IDLE;
                state.value = action.payload;
            })
            .addCase(getImageAsync.rejected, (state) => {
                state.status = Status.FAILED;
            });
    },
});

export const { } = imageSlice.actions;
export const selectImage = (state: RootState) => state.image.value;
export const selectImageStatus = (state: RootState) => state.image.status;

export default imageSlice.reducer;