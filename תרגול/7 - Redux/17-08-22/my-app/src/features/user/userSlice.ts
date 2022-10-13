import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';
import { getAllUser, sendUserData } from './userAsync';

export interface User {
    username?: string, password?: string
}
export interface UserState {
    value: Array<User>,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
    value: [],
    status: 'idle',
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendUserData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendUserData.fulfilled, (state, action: any) => {
                state.status = 'idle';
                state.value = [...state.value, action.payload];
            })
            .addCase(sendUserData.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(getAllUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllUser.fulfilled, (state, action: any) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(getAllUser.rejected, (state) => {
                state.status = 'failed';
            });
    }
})

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;