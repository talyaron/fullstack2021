import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import textReducer from '../features/text/textSlice';
import imgReducer from '../features/image/imgSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    img:imgReducer,
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
