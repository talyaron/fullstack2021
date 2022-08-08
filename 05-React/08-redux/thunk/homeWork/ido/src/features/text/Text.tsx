import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectText,textAdd,deleteText} from './textSlice';

import styles from './Counter.module.css';

export default function Text() {
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  function addText(ev:any){
    ev.preventDefault()
    const text = ev.target.elements.text.value;
    dispatch(textAdd(text))
  }
  

  return (
    <div>
      <p>{text}</p>
      <form className='addTest' onSubmit={addText}>
      {/* <input type="file" accept="image/*" name='image' onChange={changeImage}/> */}
        <input type="text" name='text' />
        <input type="submit" value="submit text"/>
      </form>
      <button onClick={() => dispatch(deleteText())} >delete all text</button>
      </div>
    
  );
}
