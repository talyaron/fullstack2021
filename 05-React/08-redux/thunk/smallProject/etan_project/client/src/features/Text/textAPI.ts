// A mock function to mimic making an async request for data
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { TextLine } from './textSlice';






export const getTextListAsync = createAsyncThunk('text/fetchTextList', async () => {
    try {        
        const {data} = await axios.post('/api/texts/fetchTextList',{ok: true});
        const textList:Array<TextLine> = data;
        return textList 
    } catch (error) {
        console.log(error);
        
    }
});
export const addTextLineAsync = createAsyncThunk('text/addTextLine', async (textLine:TextLine) => {
    try {
        const {data} = await axios.post('/api/texts/addTextLine',{textLine});
        if(!data) throw new Error("no data, addTextLineAsync, textAPI -24");
    } catch (error) {
        console.log(error);
    }
});
export const deleteTextLineAsync = createAsyncThunk('text/deleteTextLine', async (textLine:TextLine) => {
    try {
        const {data} = await axios.post('/api/texts/deleteTextLine',textLine);
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
});
// export const updateTextLineAsync = createAsyncThunk('text/updateTextLine', async (textLine:TextLine) => {
//     try {
//         const {data} = await axios.post('/api/texts/updateTextLine',{ok: true});
//     } catch (error) {
//         console.log(error);
        
//     }
// });
