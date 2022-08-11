import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectText,addText } from './textSlice';

const Text = () => {
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();
  
  function handleAddText(ev:any){
    ev.preventDefault()
    const addedText = ev.target.elements.text.value
    dispatch(addText(addedText))

  }


  return (
    <div>
      <form onSubmit={handleAddText}>
        <input type="text" name='text'/>
        <input type="submit" value="submit" />
      </form>
      <div>
        {text.map((oneText)=>{
          return(
            <p>{oneText}</p>
          )
        })}
      </div>
    </div>
  );
}
export default Text
