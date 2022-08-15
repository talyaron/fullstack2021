import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { getPhotoAsync } from "./photoApi";
export enum status{
    IDLE = 'idle',
    LOADING ='loading',
    FAILED = 'failed'
}
export interface Photo {
    photo: string;
  status: status;
    
}

const initialState: Photo = {
    photo: '',
    status: status.IDLE,
   
};



export const PhotoSlice = createSlice({
    name: 'photo',
    initialState,

   
    reducers: {
        setPhotos: (state, action: PayloadAction<string>)  => {
            console.log(state.photo, action.payload);
            
            state.photo = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPhotoAsync.pending, (state) => {
                state.status = status.LOADING;
            })
            .addCase(getPhotoAsync.fulfilled, (state, action) => {
                state.status = status.IDLE;
                state.photo = action.payload;
            })
            .addCase(getPhotoAsync.rejected, (state) => {
                state.status = status.FAILED;
            });
    },
});

export const {setPhotos} = PhotoSlice.actions;

// The function below is called a selector and allows us to select a photo from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.photo)`
export const selectPhoto = (state: RootState) => state.photo.photo;
export const selectPhotoStatus = (state: RootState) => state.photo.status;


export default PhotoSlice.reducer;
