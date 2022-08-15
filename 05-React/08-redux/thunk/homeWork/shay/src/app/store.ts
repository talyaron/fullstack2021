import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import photoReducer from '../features/photo/photoSlice';
import textReducer from '../features/text/textSlice';
import jokeReducer from '../features/jokes/jokesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
joke:jokeReducer,
photo: photoReducer
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
