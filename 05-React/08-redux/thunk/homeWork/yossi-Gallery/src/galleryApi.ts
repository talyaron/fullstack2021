import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
let x = 0

export const getPhotosAsync = createAsyncThunk(
    "photos/getPhotos",
    async () => {
        x++
        const { data } = await axios.get(`https://picsum.photos/v2/list?page=${x}&limit=12`)
        const photo = data;
        if (!photo) throw new Error("missing photo");
        return photo;
    }
)
