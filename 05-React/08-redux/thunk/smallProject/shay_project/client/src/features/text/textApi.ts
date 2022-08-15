// A mock function to mimic making an async request for data
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Text} from './textSlice'


export const getText = createAsyncThunk(
    'text/get-text',
    async () => {
       const  {data} = await axios.get('/text/get-text');
   //  const userText:Array<Text>=data

     return data;
 }
  );


export const addNewText = createAsyncThunk(
    'text/add-text',
    async (Text:Text) => {
       const  {data} = await axios.post('/text/add-text',{Text});
  

     return data;
 }
  );
  export const editAllText = createAsyncThunk(
    'text/update-text',
    async (Text:Text) => {
       const  {data} = await axios.patch('/text/update-text',{Text});
    

     return data;
 }
  );
  export const removeText = createAsyncThunk(
    'text/delete-text',
    async (Text:Text) => {
       const  {data} = await axios.patch('text/delete-text',{Text});


     return data;
 }
  );




