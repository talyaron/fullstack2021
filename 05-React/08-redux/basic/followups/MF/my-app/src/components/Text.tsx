import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeText } from '../redux/counter'

const Text = () => {
    const dispatch = useDispatch()
    const texter = useSelector((state: any) => state.texting.text)
    const [text, setText] = useState("")
    const textValue = String(text) || ""


    return (
        <div>Text

            <input value={text} placeholder="Text It"
                onChange={(e: any) => setText(e.target.value)} />

            <button onClick={() => dispatch(changeText(textValue))}>Text It</button>

            <h1>{texter}</h1>

            Text
        </div>
    )
}

export default Text