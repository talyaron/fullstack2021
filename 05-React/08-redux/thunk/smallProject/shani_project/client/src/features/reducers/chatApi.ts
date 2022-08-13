import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const API =axios.create({baseURL:"http://localhost:4001"});

// export const getPassTexts=()=>API.get('/chat/get-messages')

export const getMessages = createAsyncThunk("chat/fetchMessages", async () => {
  try {
    const { data } = await axios.get("/chat/get-allMessages");
 
    if (!data) throw new Error("didnt get data");
   
    
    console.dir(data)
    return data;
  } catch(error){
    
  }
});
