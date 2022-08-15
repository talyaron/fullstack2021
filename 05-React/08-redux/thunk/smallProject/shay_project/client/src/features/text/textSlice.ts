import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

import { getText,addNewText, removeText, editAllText } from "./textApi";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

export interface Text {
  value: string;
  img:any;
  _id: any;
}
export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}
export interface TextState {
  messeges: Array<Text>;
  status:Status;
}
const initialState: TextState = {
 messeges:[],
status:Status.IDLE,
};

export const textSlice = createSlice({
  name: "text",
  initialState,

  reducers: {
  
    addText: (state, action: PayloadAction<any>) => {
      state.messeges = [
        ...state.messeges,
        { value: action.payload, _id: action.payload,img:action.payload},
      ];
    },
    deleteText: (state, action: PayloadAction<string>) => {
      state.messeges = state.messeges.filter((item) => 
        item._id !== action.payload);
   
    },
    editText: (state, action: PayloadAction<any>) => {
      state.messeges = state.messeges.map(item => item._id == action.payload._id ? { ...item, value: action.payload.updateText} : item)

    },
    getAllText: (state, action: PayloadAction<any>) => {
      state.messeges = action.payload
   
    },
  },
  
  extraReducers: (builder) => {
    builder
    .addCase(getText.pending, (state) => {
      state.status = Status.LOADING;
    })
    .addCase(getText.fulfilled, (state, action) => {
      state.status = Status.IDLE;
      console.log('hii');
      
      state.messeges = action.payload;
      
    })
    .addCase(getText.rejected, (state) => {
      state.status = Status.FAILED;
    })
    .addCase(addNewText.pending, (state) => {
      state.status = Status.LOADING;
    })
    .addCase(addNewText.fulfilled, (state, action) => {
      state.status = Status.IDLE;
      
     state.messeges = action.payload;
      
    })
    .addCase(addNewText.rejected, (state) => {
      state.status = Status.FAILED;
    })
    .addCase(editAllText.pending, (state) => {
      state.status = Status.LOADING;
    })
    .addCase(editAllText.fulfilled, (state, action) => {
      state.status = Status.IDLE;
      
      state.messeges = action.payload;
      
    })
    .addCase(editAllText.rejected, (state) => {
      state.status = Status.FAILED;
    })
    .addCase(removeText.pending, (state) => {
      state.status = Status.LOADING;
    })
    .addCase(removeText.fulfilled, (state, action) => {
      state.status = Status.IDLE;
      
      state.messeges = action.payload;
      
    })
    .addCase(removeText.rejected, (state) => {
      state.status = Status.FAILED;
    });
  },
});


export const { addText, deleteText, editText,getAllText } = textSlice.actions;

export const selectGivenText = (state: RootState) => state.text.messeges;


export default textSlice.reducer;
