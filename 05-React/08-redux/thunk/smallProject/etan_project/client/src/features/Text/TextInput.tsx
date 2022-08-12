import React, {useState} from 'react';

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {selectText, add, TextLine, deleteLine, updateLine} from './textSlice';

const TextInput = () => {
    const text = useAppSelector(selectText);
    const dispatch = useAppDispatch();

    const handleAddText = (ev: any) => {
        ev.preventDefault();
        const uid = function () {
            return Date.now().toString(36) + Math.random().toString(36).substring(2);
        };
        const value = ev.target.addText.value;
        const newTextLine = {text: value, id: uid()};
        dispatch(add(newTextLine));
        ev.target.reset();
    };
    const handleDeleteText = (textLine: TextLine) => {
        dispatch(deleteLine(textLine));
    };
    const handleUpdateText = (textLine: TextLine, ev:any) => {
      console.log(ev);
      // textLine.text = ev.target.value;
      const updatedLine:TextLine = {text:ev.target.value, id:textLine.id}
        dispatch(updateLine(updatedLine));
    };

    return (
        <div>
            <div></div>
            <div>
                <form onSubmit={handleAddText}>
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

                <div className='textList'>
                    {text
                        ? text.map((textLine: TextLine) => {
                              return (
                                  <div  key={textLine.id} className='textLine'>
                                      <input
                                          onBlur={(ev)=>{handleUpdateText(textLine, ev)}}
                                          defaultValue={textLine.text}
                                         />
                                          

                                      <p onClick={() => {
                                              handleDeleteText(textLine);
                                          }}>&#215;</p>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
};

export default TextInput;
