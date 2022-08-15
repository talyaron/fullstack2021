import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
        const {data} = await axios.get('/api/messages/get-mesaages');
        console.log(data);
      return data;
    }
  );