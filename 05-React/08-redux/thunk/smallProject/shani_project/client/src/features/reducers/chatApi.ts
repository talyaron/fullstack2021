import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Update {
  id: any;
  updatedText: string;
}

export const getMessages = createAsyncThunk("chat/fetchMessages", async () => {
  try {
    const { data } = await axios.get("/chat/get-allMessages");

    if (!data) throw new Error("didnt get data");

    
    return data;
  } catch (error) {}
});
// it should be in thunk so it can actually catch the error adn so it goes straight through redux. works
// better and smater that way to go through the redux and get to the state it has to effect.change functions to thunk

export const editMessage = createAsyncThunk(
  "chat/updateMessage",
  async ({ id, updatedText }: Update) => {
    try {
      const { data } = await axios.patch("/chat/edit-message", {
        id,
        updatedText,
      });

      if (!data) throw new Error("didnt get data to update");

     
      return data;
    } catch (error) {}
  }
);


export const deleteMessage = createAsyncThunk(
  "chat/eraseMessage",
  async ( id:any ) => {
    try {
      const { data } = await axios.delete("/chat/delete-message", {
        data: { id },
      });
      
      if (!data) throw new Error("didnt get data to delete");

      console.log(id + 'deleted id from api')
      return data;
    } catch (error) {}
  }
);

export const addMessage = createAsyncThunk(
  "chat/addMessage",
  async ( text:string ) => {
    try {
      const { data } = await axios.post("/chat/add-message", { text});
      
      if (!data) throw new Error("didnt get data to add");

      
      return data;
    } catch (error) {}
  }
);


