import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
export interface TextState {
  value: string;
  status: "idle" | "loading" | "failed";
}

const initialState: TextState = {
  value: "",
  status: "idle",
};

export const TextSlice = createSlice({
  name: "Text",
  initialState,
  reducers: {
    changetext: (state, action: PayloadAction<string>) => {
      console.log("12312");

      state.value = action.payload;
    },
  },
});
export const { changetext } = TextSlice.actions;
export default TextSlice.reducer;
