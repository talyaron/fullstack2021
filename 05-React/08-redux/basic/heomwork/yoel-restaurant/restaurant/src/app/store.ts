import {configureStore} from "@reduxjs/toolkit";
 import reservationReducer from '../features/reservationSlice' 
 //__Reducer because we export only the reducer 
export const store = configureStore({
    reducer:{
        reservation : reservationReducer
    },

})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
