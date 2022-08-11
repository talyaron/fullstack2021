import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jokeReducer from '../reducers/jokesSlice';
import inputTextReducer from '../reducers/textSlice'

export const store = configureStore({
  reducer: {
    joke: jokeReducer,
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
