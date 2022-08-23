import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
  
interface Update{
  id:any,
  updatedText:string
}

export const getMessages = createAsyncThunk("chat/fetchMessages", async () => {
  try {
    const { data } = await axios.get("/chat/get-allMessages");
 
    if (!data) throw new Error("didnt get data");
   
    
    console.dir(data)
    return data;
  } catch(error){
    
  }
});
// it should be in thunk so it can actually catch the error adn so it goes straight through redux. works
// better and smater that way to go through the redux and get to the state it has to effect.change functions to thunk



  export const editMessage = createAsyncThunk("chat/updateMessage", async ({id,
    updatedText}:Update) => {
    try {
      const { data } = await axios.patch("/chat/edit-message", {
        id,
        updatedText
      });
   
      if (!data) throw new Error("didnt get data to update");
     
      
      console.dir(data)
      return data;
    } catch(error){
      
    }
  });