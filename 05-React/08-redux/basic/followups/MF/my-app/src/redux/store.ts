import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import texterReducer from './counter'

export default configureStore({
  reducer: {
    counter: counterReducer,
    texting: texterReducer,
  },
})