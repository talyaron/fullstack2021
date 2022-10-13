import React, {useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {selectTextList, selectTextStatus, add, TextLine, deleteLine, updateLine, statusEnum} from '../features/Text/textSlice';
import {getTextListAsync, 
    addTextLineAsync
} from '../features/Text/textAPI';

const TextInput = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTextListAsync());
    }, []);
    
    const handleAddText = (ev: any) => {
        ev.preventDefault();
        const uid = function () {
            return Date.now().toString(36) + Math.random().toString(36).substring(2);
        };
        const value = ev.target.addText.value;
        const newTextLine = {text: value, id: uid()};
        dispatch(add(newTextLine));
        dispatch(addTextLineAsync(newTextLine));
        ev.target.reset();
    };

    return (
        <div className='messageBar'>
            <form className='text' onSubmit={handleAddText}>
                <input
                    name='addText'
                    aria-label='Set increment amount'
                    // value={incrementAmount}
                    // onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <input
                    type='submit'
                    aria-label='Increment value'
                    // onClick={() => dispatch(increment())}
                />
            </form>
        </div>
    );
};

export default TextInput;
