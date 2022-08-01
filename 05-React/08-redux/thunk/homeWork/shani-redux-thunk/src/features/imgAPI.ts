import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
//creatasyncthunk lets me create the thunk
export const getImgAsync = createAsyncThunk("img/fetchImg", async () => {
  const { data } = await axios.get("https://api.imgflip.com/get_memes");

  let show =
    data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
  const meme = show.url;

  if (!data) throw new Error("missing meme");

  // The value we return becomes the `fulfilled` action payload
  return meme;
});
