// A mock function to mimic making an async request for data
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';






export const getPicAsync = createAsyncThunk('pic/fetchPic', async () => {
    try {
       
        const {data} = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.dir(data);
        
        // const picLink = data.message;
        // if (!picLink) throw new Error('No picLink was provided');
        // return picLink;
    } catch (error) {
        
    }
});
