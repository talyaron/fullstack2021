import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";
import { getPhotosAsync } from "./galleryApi";

export enum Status {
    IDEL = "idle",
    LOADING = "loading",
    FAILED = "failed",
}
export interface Photo {
    photos: [];
    isLoading: Status;
}
const initialState: Photo = {
    photos: [],
    isLoading: Status.IDEL,
};

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotosAsync.pending, (state) => {
                state.isLoading = Status.LOADING;
            })
            .addCase(getPhotosAsync.fulfilled, (state, action: PayloadAction<[]>) => {
                state.isLoading = Status.IDEL;
                state.photos = action.payload
            })
            .addCase(getPhotosAsync.rejected, (state) => {
                state.isLoading = Status.FAILED
            })
    },
});

// export const { setJoke } = gallerySlice.actions;

export const selectPhotos = (state:RootState)=>state.gallery.photos
export const selectPhotosStatus = (state:RootState)=>state.gallery.isLoading
export default gallerySlice.reducer;