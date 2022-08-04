import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    value : [] // initial
}
export const reservationsSlice = createSlice({
    name:"reservation" ,// we can call how we want
    initialState,
    reducers:{} // I think here we will put the actions
})
export default reservationsSlice.reducer; // we need to export the all slice