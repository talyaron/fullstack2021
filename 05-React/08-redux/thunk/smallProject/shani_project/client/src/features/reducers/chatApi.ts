import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMessages = createAsyncThunk(
    'chat/fetchMessages',
    async () => {
      const  {data} = await axios.get("/chat/get-messages");
     
     const value=data.value
      return value;
    }
  );