import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter';
import inputTextReducer from './text'

export default configureStore({
    
    reducer:{
        counter: counterReducer,
        inputText: inputTextReducer
        
    }
})
// console.log(inputTextReducer)