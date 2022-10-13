import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

interface Data {
    username?: string
    password?: string
}

export const getAllUser = createAsyncThunk('user/getUsers', async () => {
    const { data } = await axios.get('/get-users')
    const { users } = data
    return users
})

export const sendUserData = createAsyncThunk('user/sendUser', async ({ username, password }: Data) => {
    const { data } = await axios.post('/add-user', { username, password })
    const { result } = data
    return result
})