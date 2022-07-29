import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import picCompReducer from '../features/picComp/picCompSlice';

export const store = configureStore({
  reducer: {
    picComp: picCompReducer,
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
