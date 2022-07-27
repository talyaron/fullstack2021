import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//     count: number
// }

// const initialState: CounterState = {
//     count: 0,
// }

export interface TextState {
    text: string,
}

const initialState: TextState = {
    text: "",
}

export const texterSlice = createSlice({
    name: 'texter',
    initialState,
    reducers: {
        changeText: (state:any, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }

})

export const { changeText } = texterSlice.actions

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             // Redux Toolkit allows us to write "mutating" logic in reducers. It
//             // doesn't actually mutate the state because it uses the Immer library,
//             // which detects changes to a "draft state" and produces a brand new
//             // immutable state based off those changes
//             state.count += 1
//         },
//         decrement: (state) => {
//             state.count -= 1
//         },
//         incrementByAmount: (state, action: PayloadAction<number>) => {
//             state.count += action.payload
//         },
//     },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer
export default texterSlice.reducer