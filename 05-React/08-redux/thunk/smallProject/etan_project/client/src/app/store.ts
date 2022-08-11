import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textReducer from '../features/Text/textSlice';

export const store = configureStore({
  reducer: {
    Text: textReducer,
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
