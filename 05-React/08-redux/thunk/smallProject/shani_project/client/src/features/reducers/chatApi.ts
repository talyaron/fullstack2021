import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const API =axios.create({baseURL:"http://localhost:4001"});

// export const getPassTexts=()=>API.get('/chat/get-messages')

export const getMessages = createAsyncThunk("chat/fetchMessages", async (_,{}) => {
  // try {
  //   const { data } = await axios.get("/chat/get-messages");
  //   // const { data } = await getPassTexts()
  //   if (!data) throw new Error("didnt get data");
  //   const value = data.value;
  //   console.log(value);
    
  //   console.dir(data)
  //   return value;
  // } catch(error){
    
  // }
});
