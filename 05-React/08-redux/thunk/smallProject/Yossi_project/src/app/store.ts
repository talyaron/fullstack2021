import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import inputTextReducer from '../reducers/textSlice'

export const store = configureStore({
  reducer: {
    inputText: inputTextReducer
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
