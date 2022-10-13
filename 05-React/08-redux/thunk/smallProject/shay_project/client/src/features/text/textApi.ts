// A mock function to mimic making an async request for data
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Text} from './textSlice'

interface Data{
  id:string,
  updateText:string
}
export const getText = createAsyncThunk(
    'text/get-text',
    async () => {
       const  {data} = await axios.get('/text/get-text');


     return data;
 }
  );


export const addNewText = createAsyncThunk(
    'text/add-text',
    async (value:string) => {
       const  {data} = await axios.post('/text/add-text',{value});
  

     return data;
 }
  );
  export const editAllText = createAsyncThunk(
    'text/update-text',
    async ({id,updateText}:Data) => {
       const  {data} = await axios.patch('/text/update-text',{id,updateText});
    

     return data;
 }
  );
  export const removeText = createAsyncThunk(
    'text/delete-text',
    async (id:string) => {
       const  {data} = await axios.patch('text/delete-text',{id});


     return data;
 }
  );