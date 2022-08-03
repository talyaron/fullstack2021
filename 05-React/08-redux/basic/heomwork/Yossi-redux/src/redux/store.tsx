import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter';
import inputTextReducer from './text';
import changeColorColorReducer from './theme'

export default configureStore({
    reducer:{
        counter: counterReducer,
        inputText: inputTextReducer,
        changeColor: changeColorColorReducer
    }
})