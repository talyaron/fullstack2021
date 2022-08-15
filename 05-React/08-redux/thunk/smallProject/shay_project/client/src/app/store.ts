import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textReducer from '../features/text/textSlice';

export const store = configureStore({
  reducer: {
    text: textReducer,
    img:textReducer
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
