import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMessages = createAsyncThunk("chat/fetchMessages", async () => {
  const { data } = await axios.get("/chat/get-messages");
  const text=data.value
  console.log(text)
  console.log(data)
  return text;
});
