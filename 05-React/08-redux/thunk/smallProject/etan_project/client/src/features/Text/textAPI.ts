// A mock function to mimic making an async request for data
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';






export const getTextListAsync = createAsyncThunk('text/fetchTextList', async () => {
    try {
        const {data} = await axios.post('https://dog.ceo/api/breeds/image/random');
        console.dir(data);
        
        const picLink = data.message;
        if (!picLink) throw new Error('No picLink was provided');
        return picLink;
    } catch (error) {
        
    }
});
