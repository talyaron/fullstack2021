import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setText } from '../../reducers/textSlice';

const TextArea = () => {
    const inputText = useAppSelector((state: any) => state.inputText.value);

    const dispatch = useAppDispatch();

    return (
        <div className='textAreaContainer'>
            <form className='formContainer' onSubmit={(e) => dispatch(setText(e.target.value))}>
                <textarea className='textArea' />
                <button>Submit</button>
                <p>{inputText}</p>
            </form>
        </div>
    )
}

export default TextArea