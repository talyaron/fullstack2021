import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import textReducer from '../features/text/textSlice';

//the name we give the state in the slice and shows that they have reducers?
// or the name of the reducers we will have??
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text:textReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
