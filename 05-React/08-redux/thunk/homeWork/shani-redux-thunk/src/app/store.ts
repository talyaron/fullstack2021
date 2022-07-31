import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import imgReducer from '../features/imgSlice';

export const store = configureStore({
  reducer: {
    img: imgReducer,
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
