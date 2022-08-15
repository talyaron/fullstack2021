import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getPhotoAsync = createAsyncThunk(
  "img/fetchImg",
  async () => {
  
  const { data } = await axios.get("https://picsum.photos/v2/list");
console.log(data);


    let showPhoto =  data[Math.floor(Math.random() * data.length)];

    
  const img = showPhoto.download_url;
    if (!data) throw new Error("Missing photo");

    // The value we return becomes the `fulfilled` action payload
    return img;
}
);
