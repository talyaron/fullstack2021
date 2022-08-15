import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    try {
      const { data } = await axios.get('/api/messages/get-mesaages');
      if(!data) throw new Error('no data recived');
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);