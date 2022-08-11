import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getJokeAsync = createAsyncThunk(
  "joke/fetchJoke",
  async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    const { value } = data;
    if (!value) throw new Error("Missing joke");
    return value;
  }
);
