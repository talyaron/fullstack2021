import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMessages = createAsyncThunk(
    'img/fetchImg',
    async () => {
        const data = await axios.get('https://source.unsplash.com/random');
        const {request} = data;
        const{responseURL} = request;
        // if (!value) throw new Error("Missing joke");
        console.log(responseURL);
      return responseURL;
    }
  );